  import { FaGithub, FaLinkedin } from "react-icons/fa";
  // import { ReactComponent as LeetCodeIcon } from "../assets/leetcode.svg";


  import projectImage1 from "../assets/project1.png";
  import projectImage2 from "../assets/project2.png";
  import projectImage3 from "../assets/project3.png";
  import projectImage4 from "../assets/project4.png";
  import projectImage5 from "../assets/project5.jpeg";
  import projectImage6 from "../assets/project6.jpeg";

  
  import { FaCss3 } from "react-icons/fa"; // Font Awesome CSS icon
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiTailwindcss } from "react-icons/si"; // Importing Tailwind CSS icon
  import { SiExpress } from "react-icons/si"; // Importing Express.js icon
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { SiMysql } from "react-icons/si"; // Importing MySQL icon 
  import { DiJava } from "react-icons/di";             
  import { FaPython } from "react-icons/fa";
  import { FaHtml5 } from "react-icons/fa";
  import { DiJavascript } from "react-icons/di";
  import { AiFillAmazonCircle } from "react-icons/ai"; // Importing new AWS icon
  import { SiSpringboot } from "react-icons/si"; // Import Spring Boot icon
  import { FaReact } from "react-icons/fa"; // Import React icon
  import { SiPostman } from "react-icons/si"; // Import Postman icon for RESTful APIs
  import { SiGit } from "react-icons/si"; // Import Git icon
  import { GiProgression } from "react-icons/gi"; // Import alternative Agile icon  import { GiGitPull } from "react-icons/gi"; // Import CI/CD icon
  import { SiJenkins } from "react-icons/si"; // Import Jenkins CI/CD icon


  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "Dharma Ajay",
    greet: "Hello there! 👋🏻",
    description:
      "I’m a software developer with a strong interest in both frontend and backend technologies, as well as data science. With a solid foundation in data structures and algorithms, I’m passionate about problem-solving and enjoy designing and building distributed, scalable systems that make a meaningful impact. Focused on creating efficient, user-centered solutions, I continuously seek to bridge the gap between cutting-edge technologies and real-world applications."
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "BeatCancer",
      description:
        "AI Cancer Care provides an easy and efficient way to craft personalized cancer care using AI. It interacts with the Gemini AI to analyze and generate detailed treatment plans based on patient data and medical records.",
      image: projectImage1,
      githubLink: "https://github.com/Dharmaajay2222/beat-cancer",
    },
    {
      id: 2,
      name: "FileSync S3",
      description:
        "A scalable file upload tool using AWS S3 to reduce storage costs and boost efficiency. Built with React.js and Spring Boot, it offers a secure, user-friendly interface for seamless file management.",
      image: projectImage2,
      githubLink: "https://github.com/Dharmaajay2222/FileSync-S3",
    },
    {
      id: 3,
      name: "EthLink",
      description:
        "Create EthLink, a secure Ethereum dApp for transferring Ether using Solidity smart contracts with re-entrancy protection. Master Web3.0 essentials, from contract deployment to integrating Ether payments in an NFT marketplace.",
      image: projectImage3,
      githubLink: "https://github.com/Dharmaajay2222/EthLink",
    },
    {
      id: 4,
      name: "ExamShield",
      description:
        "A secure system for encrypted exam paper distribution, featuring role-based access control, scheduled access, and real-time monitoring to protect exam integrity and confidentiality.",
      image: projectImage4,
      githubLink: "https://github.com/Dharmaajay2222/ExamShield",
    },
    {
      id: 5,
      name: "Blog Platform",
      description:
        "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
      image: projectImage5,
      githubLink: "https://github.com/user/blog-platform",
    },
    {
      id: 6,
      name: "Chat Application",
      description:
        "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
      image: projectImage6,
      githubLink: "https://github.com/user/chat-application",
    },
  ];
  
  export const BIO = [
    "Hi! I’m Dharma Ajay, a software developer pursuing my B.E. in Computer Science Engineering at SRM TRP Engineering College. Currently, I’m a Front-End Developer Intern at ParkQwik, where I create responsive user interfaces using JavaScript, React.js, and React Native, enhancing user engagement and optimizing performance.",
    "I have a strong foundation in Data Structures and Algorithms, honed through platforms like LeetCode and CodeChef. I’m passionate about developing distributed scalable systems and solving complex problems. My projects include an AI-driven application for personalized cancer treatment and a secure Ethereum dApp for Ether transfers.",
    "In my free time, I enjoy coding challenges and exploring new technologies. Let’s connect and collaborate on impactful projects!",
  ];
  
  export const SKILLS = [
    {
      icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "HTML",
      //experience: "2+ years",
    },
    {
      icon: <FaCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "CSS",
      //experience: "2+ years",
    },
    {
      icon: <DiJavascript className="text-4xl text-yellow-600 lg:text-5xl" />,
      name: "JavaScript",
      //experience: "3+ years",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      //experience: "2+ years",
    },
    {
      icon: <FaReact className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "React Native",
      //experience: "1+ year",
    },
  
    {
      icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />,
      name: "Tailwind CSS",
      //experience: "1+ year",
    },
    {
      icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
      name: "Next.js",
      //experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      //experience: "2+ years",
    },
    {
      icon: <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Express.js",
      //experience: "2+ years",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      //experience: "1.5+ years",
    },
    {
      icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
      name: "Redis",
      //experience: "1+ year",
    },
    {
      icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "MySQL",
      //experience: "1+ year",
    },
    {
      icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Spring Boot",
      //experience: "1+ year",
    },
    {
      icon: <DiJava className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "Java",
      //experience: "2+ years",
    },
    {
      icon: <FaPython className="text-4xl text-blue-600 lg:text-5xl" />,
      name: "Python",
      //experience: "2+ years",
    },
    {
      icon: <AiFillAmazonCircle className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "AWS",
      //experience: "1+ year",
    },
    {
      icon: <SiPostman className="text-4xl text-red-500 lg:text-5xl" />,
      name: "RESTful APIs",
      //experience: "2+ years",
    },
    {
      icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "Git",
      //experience: "2+ years",
    },
    {
      icon: <GiProgression className="text-4xl text-yellow-600 lg:text-5xl" />,
      name: "Agile",
      //experience: "1+ year",
    },
    {
      icon: <SiJenkins className="text-4xl text-black lg:text-5xl" />,
      name: "CI/CD",
      //experience: "1+ year",
    },
  ];
  
  
  export const EXPERIENCES = [
    {
      title: "Frontend Developer Intern",
      company: "ParkQwik",
      duration: "September 2024 - Present",
      description:
        "As a Front-End Developer Intern at ParkQwik since September 2024, I engineered responsive user interfaces using JavaScript, React.js, and React Native, leading to a 25% increase in user engagement. I resolved complex front-end issues through effective debugging and troubleshooting, ensuring high application availability. Additionally, I collaborated with cross-functional teams to implement features that enhanced product performance and user satisfaction while contributing to the optimization of application scalability through agile development processes and sharing technical insights.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "SRM TRP Engineering College, Anna University",
      duration: "November 2022 - Expected Graduation 2026",
      description:
        "As a third-year student at SRM TRP Engineering College, I am deeply engaged in exploring the ever-evolving landscape of Computer Science and Engineering. My coursework has provided me with a robust foundation in key areas, including Object-Oriented Programming, Data Structures, Algorithms, Python, C, Database Management Systems (DBMS), Operating Systems, and Computer Networks. Through a blend of theoretical knowledge and practical applications, I am cultivating a strong problem-solving mindset and honing my skills to tackle complex technological challenges.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Sankara Matric Hr. Sec School",
      duration: "2021 - 2022",
      description:
        "My journey in technology began during my higher secondary education, where I focused on Physics, Chemistry, Mathematics, and Computer Science, igniting my passion for engineering and paving the way for my academic pursuits.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    // {
    //   href: "https://leetcode.com/your-username/", // Replace with your LeetCode profile link
    //   icon: <LeetCodeIcon className="hover:opacity-80" style={{ width: '25px', height: '25px' }} />, // Set size as needed
    // },
    {
      href: "https://github.com/Dharmaajay2222",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/dharmaajay/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];