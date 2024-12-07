import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  privacy,
  scalability,
  adhar,
  scale,
  context,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Tech Stack",
    url: "#pricing",
  },
  {
    id: "2",
    title: "About Us",
    url: "#how-to-use",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// export const roadmap = [
//   {
//     id: "0",
//     title: "Voice recognition",
//     text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap1,
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: "Gamification",
//     text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap2,
//   },
//   // {  
//   //   id: "2",
//   //   title: "Chatbot customization",
//   //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//   //   date: "May 2023",
//   //   status: "done",
//   //   imageUrl: roadmap3,
//   // },
//   // {
//   //   id: "3",
//   //   title: "Integration with APIs",
//   //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//   //   date: "May 2023",
//   //   status: "progress",
//   //   imageUrl: roadmap4,
//   // },
// ];
export const roadmap = [
  {
    id: "0",
    title: "Text Redaction",
    text: "Allows you to upload documents like PDFs, word documents, or images and redact sensitive information.",
    date: "1",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Video Redaction",
    text: "Effortlessly redact faces in videos, ensuring privacy and safeguarding identities with precision.",
    date: "2",
    status: "done",
    imageUrl: roadmap2,
  },
  // {  
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "1. Privacy Protection",
    text: "Redact ensures that sensitive data, such as personally identifiable information (PII) or confidential content, is securely anonymized or removed, protecting individuals' and organizations' privacy.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: privacy,
  },
  {
    id: "1",
    title: "2. Enhanced Data Security",
    text: "Reducing exposure to sensitive information minimizes risks of data breaches, misuse, or unauthorized access.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: privacy,
    light: true,
  },
  {
    id: "2",
    title: "3. Redaction of GOVT IDs",
    text: "Tailored redaction rules to detect specific patterns  such as:Classified document labels.Government IDs like AADHAAR or PAN",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: adhar,
  },
  {
    id: "3",
    title: "4. User Definable Gradation scale",
    text: "Lets users quickly set the level of Redaction according to thier requirement on a pre-defined scale of 1(least)-10(most) sensitive.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: scale,
    light: true,
  },
  {
    id: "4",
    title: "5. Preserves Context:",
    text: "The use of realistic replacements (e.g., Faker-generated data) ensures that the text remains useful for analysis or testing, even after anonymization.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: context,
  },
  {
    id: "5",
    title: "6. Scalability:",
    text: "The implementation can handle large datasets efficiently, making it suitable for projects requiring bulk anonymization.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: scalability,
  },
];
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
