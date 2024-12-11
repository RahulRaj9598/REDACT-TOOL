from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import json
from json import dump
import requests
# Import the ImageProcessor class from your Python script
from preprocessing import ImageProcessor
from docpreprocessing import DocumentProcessorFactory

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set upload folder and allowed extensions
UPLOAD_FOLDER = "./uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/redact-img", methods=["POST"])
def redact_document():
    if "file" not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"message": "No selected file"}), 400

    # Get gradation level from the form data
    gradation = request.form.get("gradation", "default")  # Default value if not provided
    custom_gradation = request.form.get("custom_gradation", "[]")
    try:
        custom_gradation = json.loads(custom_gradation)  # Convert JSON string to Python list
    except json.JSONDecodeError:
        return jsonify({"message": "Invalid custom_gradation format"}), 400
    
    
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(file_path)
    print(file_path)
    try:
        # Process the file using your ImageProcessor class
        processor = ImageProcessor()
        processor.process_image(file_path)

        # Save output to a specific file and get the JSON data
        output_path = "output.json"
        output_data = processor.save_results(output_path)

        # Integrate gradation into the metadata of the output data
        output_data['metadata']['gradation'] = gradation
        output_data['metadata']['custom_tags'] = custom_gradation
        
        # Save the updated data to a new file
        combined_output_path = "combined_output.json"
        with open(combined_output_path, "w") as file:
            json.dump(output_data, file, indent=4)

        print(f"Gradation Level: {gradation}")
        print(f"Custom Tags: {custom_gradation}")
        print(f"Combined output saved to {combined_output_path}")

        # Optionally send the updated JSON to a notebook or another endpoint
        redaction_response = send_to_redaction_process(combined_output_path)

        # Save the redacted JSON received from the second API
        redacted_output_path = "output_redacted.json"
        with open(redacted_output_path, "w") as redacted_file:
            json.dump(redaction_response, redacted_file, indent=4)

        with open(redacted_output_path, "r") as redacted_file:
            redacted_obj = json.load(redacted_file)
            
        # Convert the redacted JSON back into a PDF (implementation needed)
        pdf_output_path = "final_output.pdf"
        processor.text_objects = redacted_obj['text']
        processor.reconstruct_pdf(pdf_output_path, "./transparent.png")


        # return jsonify({"message": "File has been processed and redacted successfully!"}), 200
        return send_file(pdf_output_path, as_attachment=True, download_name="final_output.pdf")

    except Exception as e:
        return jsonify({"message": f"Error processing file: {e}"}), 500
    finally:
        os.remove(file_path)
        
def send_to_redaction_process(json_path):
    """Send the combined JSON data to the redaction API."""
    redaction_url = "http://127.0.0.1:8000/redactionprocess"
    with open(json_path, "rb") as json_file:
        try:
            print(json_file)
            print(json_path)
            response = requests.post(redaction_url, files={"file": json_file})
            response.raise_for_status()
            return response.json()  # Assuming the second API returns JSON
        except requests.RequestException as e:
            print(e)
            raise Exception(f"Error in redaction process: {e}")






# # Set upload folder and allowed extensions
UPLOAD_FOLDER2 = os.path.join(os.getcwd(), "uploads2")
OUTPUT_FOLDER2 = os.path.join(os.getcwd(), "outputs2")
os.makedirs(UPLOAD_FOLDER2, exist_ok=True)
os.makedirs(OUTPUT_FOLDER2, exist_ok=True)

app.config["UPLOAD_FOLDER2"] = UPLOAD_FOLDER2
app.config["OUTPUT_FOLDER2"] = OUTPUT_FOLDER2
@app.route("/redact-document", methods=["POST"])
def redact_document_all():
    if "file" not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files["file"]
    gradation = request.form.get("gradation", "default")
    
    print(gradation)
    
    if file.filename == "":
        return jsonify({"message": "No selected file"}), 400

    # Get replacement map and other options from form data
    replacement_map = request.form.get("replacement_map", "{}")
    try:
        replacement_map = json.loads(replacement_map)  # Convert JSON string to Python dict
    except json.JSONDecodeError:
        return jsonify({"message": "Invalid replacement_map format"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config["UPLOAD_FOLDER2"], filename)
    file.save(file_path)
    print("#########################")
    print(file_path)
    try:
        # Process the file using your FileProcessor classes
        processor = DocumentProcessorFactory.create_processor(file_path)

        # Extract text from the document
        extracted_text = processor.extract_text()
        #print("extracted_text hai you seeeeeeeeeeeeee", extracted_text)

        # Send extracted text to the redaction API
        external_api_url = "http://127.0.0.1:8000/redactionprocess-doc"
        payload = {
            "text": extracted_text,
            "gradation_level": gradation
        }
        try:
            # print(payload)
            response = requests.post(external_api_url, json=payload, headers={"Content-Type": "application/json"})
            print("HOHHHHHH")
            print(response)
            # response.raise_for_status()
            replacement_map = response.json() if isinstance(response.json(), dict) else {}  # Ensure it's a dict
            print("hahaha")
            
            
            
        except requests.RequestException as e:
            return jsonify({"message": f"Error communicating with external API: {e}"}), 500

        # Perform redaction and reconstruct the document
        redacted_output_path = os.path.join(OUTPUT_FOLDER2, f"redacted_{filename}")
        print(redacted_output_path)
        processor.replace_text(replacement_map, output_path=redacted_output_path)
        print("return se pehle")
        print(OUTPUT_FOLDER2)
        # Send reconstructed PDF and response data
        print(redacted_output_path)
        return send_file(
            redacted_output_path,
            as_attachment=True,
            download_name=f"redacted_{filename}",
            mimetype="application/pdf",
            # headers={
            #     "Content-Disposition": f"attachment; filename=redacted_{filename}",
            #     "X-Replacement-Map": json.dumps(replacement_map, indent=4),
            # },
        )

    except requests.RequestException as e:
        print(f"Error communicating with the redaction API: {e}")
        return jsonify({"message": f"Error communicating with the redaction API: {e}"}), 500

    except Exception as e:
        print(f"Error processing file: {e}")
        return jsonify({"message": f"Error processing file: {e}"}), 500

    finally:
        # Cleanup uploaded file
        if os.path.exists(file_path):
            os.remove(file_path)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)