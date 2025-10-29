/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import buLogo from "./assets/images/buLogo.png";
import schoolLogo from "./assets/images/schoolLogo.png";
import osm from "./assets/images/osm.png";
import ojtLogo from "./assets/images/ojtLogo.png";
import optumLogo from "./assets/images/optumLogo.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {animated: true};

const greeting = {
  username: "francisninomoncada",
  title: "Hi all, I'm Francis 👋",
  subTitle: emoji(
    "I'm an Information Technology graduate and a passionate Cybersecurity Enthusiast dedicated to protecting digital assets and enhancing security posture through analytical thinking and continuous learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lCKr1faBLtl3HHKNKPrYg5XrffTFi5e-/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/trashpenguin",
  linkedin: "https://www.linkedin.com/in/francisninoranilemoncada/",
  gmail: "francisninoranile.moncada@bicol-u.edu.ph",
  facebook: "https://www.facebook.com/uselesspenguissleeping",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "CYBERSECURITY-ORIENTED IT PROFESSIONAL INTERESTED IN NETWORK SECURITY, SYSTEM ADMINISTRATION, AND WEB DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Identify and mitigate cybersecurity threats to enhance digital safety"
    ),
    emoji("⚡ Develop and maintain secure web applications and systems"),
    emoji(
      "⚡ Conduct vulnerability assessments and improve overall system integrity"
    )
  ],

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "ReactJS", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bicol University",
      logo: require("./assets/images/buLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2019 - 2024",
      desc: "Completed academic coursework in networking, cybersecurity, and system development. Conducted OJT at the Accounting/Budget/Supply Office to assist with document management and IT-related tasks.",
      descBullets: []
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Cybersecurity Fundamentals", progressPercentage: "80%"},
    {Stack: "Web Development", progressPercentage: "60%"},
    {Stack: "Networking & Systems", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "IT Intern",
      company: "Bicol University Accounting/Budget/Supply Office",
      companylogo: require("./assets/images/buLogo.png"),
      date: "Febuary 2024 – June 2024",
      desc: "Performed document management, design creation, and digital record-keeping tasks. Collaborated with teams across accounting, budget, and supply divisions to improve workflow efficiency."
    },
    {
      role: "Research Developer",
      company: "San Jose National High School (Capstone Project)",
      companylogo: require("./assets/images/schoolLogo.png"),
      date: "September 2023 – January 2024",
      desc: "Developed and evaluated an Online School Management System as part of our school capstone project, aiming to streamline administrative processes, enhance document security, and improve usability"
    },
    {
      role: "Customer Service Representative",
      company: "Optum",
      companylogo: require("./assets/images/optumLogo.png"),
      date: "November 2024 – August 2025",
      desc: "Provide excellent customer support by handling inquiries, resolving issues, and ensuring customer satisfaction. Demonstrate strong communication, problem-solving, and multitasking skills in a fast-paced environment."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Some of the projects I've built or contributed to",
  projects: [
    {
      image: require("./assets/images/osm.png"),
      projectName: "Online School Management System",
      projectDesc:
        "A system developed for San Jose National High School to enhance administrative efficiency, student data management, and document security.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle:
    "Certifications, Recognitions, and Accomplishments during my IT journey.",
  achievementsCards: [
    {
      title: "OJT Completion",
      subtitle:
        "Completed 460 hours of On-the-Job Training at Bicol University’s Accounting/Budget/Supply Office.",
      image: require("./assets/images/ojtLogo.png"),
      imageAlt: "OJT Certificate",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to share insights about technology, cybersecurity, and personal growth in IT.",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://medium.com/@francisninomoncada",
      title: "Why Cybersecurity Awareness Matters in Today’s Digital Age",
      description:
        "Understanding the human element behind cyber threats and how simple actions can prevent major breaches."
    }
  ],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing knowledge through discussions and tech talks."),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Exploring technology and digital security topics.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "You can download my updated resume below.",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to collaborate on a project or discuss cybersecurity? Feel free to reach out.",
  number: "+639198188442",
  email_address: "francisninoranile.moncada@bicol-u.edu.ph"
};

// Twitter Section
const twitterDetails = {userName: "", display: false};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
