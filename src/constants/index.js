import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dreamlaunch,
  blackberry,
  cisec,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    pdfUrl: "/resume.pdf",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "DreamLaunch",
    icon: dreamlaunch,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Led application development and architecture of a hackathon event management web application that seamlessly guides users through every step of the event, serving over 100 users.",
      "Implemented complex features such as real-time updates, team collaboration, chat, and multi-stage project management.",
      "Worked with a cross-functional team to gather requirements, prioritize features, and ensure product alignment with business goals.",
      "Utilized React and PHP for efficient front-end and back-end development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "BlackBerry",
    icon: blackberry,
    iconBg: "#E6DEDD",
    date: "January 2022 - August 2022",
    points: [
      "Resolved functionality issues in a web application by collaborating with architects and QA engineers to identify and implement solutions, resulting in a 20% improvement in system functionality and user satisfaction.",
      "Assisted in the migration and updating of legacy applications to improve performance and user experience.",
      "Utilized React and Adobe Experience Manager (AEM) to develop and maintain web applications.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Canadian International Sport & Educational Center",
    icon: cisec,
    iconBg: "#383E56",
    date: "March 2021 - December 2021",
    points: [
      "Developed a custom CRM for managing customers using React and Node.js, improving efficiency in customer management and support by 25%.",
      "Collaborated with cross-functional teams to deliver high-quality code and ensure application performance and scalability.",
      "Developed a server-side rendering feature using Next.js, improving the website's SEO and decreasing page load time by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abror is a professional web developer. We met just for 1 briefing call and then 3 days later he delivered very good quality website. I highly recommend him!",
    name: "Seva Losev",
    designation: "CFO",
    company: "Canadian International Sport & Educational Center",
    image: "https://media.licdn.com/dms/image/C4D03AQE1kd475z0gtA/profile-displayphoto-shrink_800_800/0/1645386631852?e=1687392000&v=beta&t=-UOJogQg4RGTec0PjxBe-l5AR4O7S13LlhF_iNG6YLc",
  },
  {
    testimonial:
      "Abror is a solid worker who will put in the extra effort to get tasks done. He spends a lot of time getting things perfect.",
    name: "Samuel Cadotte",
    designation: "Software Engineer",
    company: "DreamLaunch",
    image: "https://media.licdn.com/dms/image/C5603AQHNdrNq1mhfHg/profile-displayphoto-shrink_800_800/0/1635637700420?e=1687392000&v=beta&t=xAxmzl35uRLkZ8Nq8DcaKdAe2897kt7ifGTRsIcVwFU",
  },
  {
    testimonial:
      "Abror is amazing to work with! He's super detail-oriented and always produces top-notch work. A real asset to any software engineering team.",
    name: "Ritesh Uppal",
    designation: "Event Coordinator",
    company: "DreamLaunch",
    image: "https://media.licdn.com/dms/image/D4E03AQE-a1vBexZIFA/profile-displayphoto-shrink_800_800/0/1678582285984?e=1687392000&v=beta&t=gYyHTTg8DR27Nv4jUAF-ag3d8g22fNCTX2G16CSeyuw",
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Interactive personal website showcasing portfolio, built with React, Three.js for 3D animations, and styled using TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abrkamalov/akamalov.com",
  },
  {
    name: "DreamLinked",
    description:
      "DreamLinked's sleek landing page built using React showcases the platform's unique features and offerings to potential users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "EasyHomework",
    description:
      "EasyHomeworks landing page built using React provides a user-friendly and intuitive interface for students and tutors to connect and collaborate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abrkamalov/easydz.ru",
  },
];

export { services, technologies, experiences, testimonials, projects };