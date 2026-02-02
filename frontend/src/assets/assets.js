
import image1 from './image1.png';
import image2 from './image2.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import Chatbot from './chatbot.png';
import News from './news.png';
import Insurance from './insurance.png';
import Quiz from './quiz.png';
import AboutImage from './AboutImage.png';
import { FaBolt, FaCarCrash, FaHeadset, FaChartBar, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MessageCircle, Newspaper, HelpCircle, Database, FileText } from "lucide-react";
import { FiMail, FiMessageSquare, FiPhone, FiUser } from 'react-icons/fi';



export const assets={image1,image2,image4,image5,image6,image7,AboutImage
}
export const bannerAssets={
    orbitImages:[image1,image2,image4,image5,image6,image7]
};

//About HOMEPAGE
export const aboutfeature = [
  {
    icon: FaHeadset,
   title: "Multilingual Chatbot",
    text: "Instant responses in Arabic and French about the Moroccan road code.",
    color: "from-[#303481] to-[#4B6CB7]", // nice gradient blue
  },
  {
    icon: FaCarCrash,
     title: "Driving Test Prep",
    text: "Interactive quizzes to efficiently revise the road code.",
    color: "from-[#FFD700] to-[#FFA500]", // yellow-orange gradient
  },
  {
    icon: FaChartBar,
    title: "Analytics & Stats",
    text: "Visualize accident data for better prevention and awareness.",
    color: "from-[#FF6B6B] to-[#FF4757]", // red gradient, stands out
  },
  {
    icon: FaBolt,
    title: "Fast Assistance",
    text: "Real-time insurance tracking and offline access in emergencies.",
    color: "from-[#00C6FF] to-[#0072FF]", // cyan-blue gradient, techy feeling
  },
];

 // News
export const inintialNewsData = [
  {
    id: 1,
    title: "Road Code: What Will Change for Drivers",
    views: 1250,
    hearts:55800,
    description:
      "A draft law details upcoming reforms to modernize Morocco’s road traffic regulations. (Medias24)",
    
    
  },
  {
    id: 2,
    title: "Road Code: Fines and Penalties Updated",
    views: 980,
    hearts:2540,
    description:
      "Decree 2.24.655 modifies the rules for certain road traffic violations and their fines. (Medias24)",
    
  },
  {
    id: 3,
    title: "Road Safety: The Highway Code Gets a Makeover",
    views: 760,
    hearts:9800,
    description:
      "A new decree has been adopted to strengthen penalties and simplify administrative procedures. (Maroc Diplomatique)",
    
  },
  {
    id: 4,
    title: "Highway Code Reform: Changes Ahead",
    views: 640,
    hearts:550,
    description:
      "The reform introduces partial replacement of license withdrawal with fines and tougher penalties for repeat offenders. (Le360)",
    
  }
];

export const additionalNewsData = [
  {
    id: 5,
    title: "Traffic Accidents: Morocco Records 3,500 Deaths in 2024",
    views: 1120,
    hearts:9800,
    description:
      "The National Road Safety Agency reports a concerning number of traffic-related deaths and injuries in Morocco. (Hespress)",
    
  },
  {
    id: 6,
    title: "New Driving License Points System Planned",
    views: 870,
    hearts:100,
    description:
      "Authorities are preparing to introduce changes to the points system, aiming to strengthen road discipline. (Aujourd'hui le Maroc)",
  },
  {
    id: 7,
    title: "Morocco Launches Road Safety Campaign",
    views: 740,
    hearts:300,
    description:
      "The Ministry of Transport has launched a nationwide campaign to raise awareness among young drivers. (MAP News)",
   
  },
  {
    id: 8,
    title: "Smart Radar Systems Installed on Highways",
    views: 680,
    hearts:500,
    description:
      "New generation smart radars are being deployed to reduce speeding and road accidents on Morocco’s highways. (Le Matin)",
  
  }
];
export const socialIcons=[
  {icon:FaFacebook,link:""},
  {icon:FaInstagram,link:""},
  {icon:FaYoutube,link:""},
  {icon:FaLinkedin,link:""},
]

export const features=[
  {
    id:1,
    title:"Smart Chatbot",
    icon:MessageCircle,
    img:Chatbot,
    description:"An intelligent assistant that guides drivers with instant answers, traffic tips, and 24/7 support for a smoother driving experience."
  },
  {
   id: 2,
    title: "Latest News",
    icon: Newspaper,
    img: News,
     description:"Stay updated with the newest road safety alerts, traffic regulations, and automotive industry news—all in one place."
  },
  {
    id: 3,
    title: "Interactive Quizzes",
    icon: HelpCircle ,
    img: Quiz,
     description:"Test and strengthen your driving knowledge through fun and engaging quizzes designed to make learning enjoyable and effective."
  },
 
  {
    id: 5,
    title: "Insurance File Processing",
    icon: FileText ,
    img: Insurance,
    description:"Simplify your insurance journey with smart file management—upload, track, and process your claims seamlessly and securely."
  },
]
export const contactForm=[
  {label:'Full Name',name:'name',type:'text',placeholder:'Enter your full name',Icon:FiUser},
   {label:'Phone Number',name:'phone',type:'tel',placeholder:'+(212)6 65 66 35 20',Icon:FiPhone},
    {label:'Email Address',name:'email',type:'text',placeholder:'your.email@gmail.com',Icon:FiMail},
    
]
