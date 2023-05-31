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
  strelka,
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
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "Custom API Development",
    icon: mobile,
  },
  {
    title: "Mobile App Development",
    icon: backend,
  },
  {
    title: "Technical Consulting",
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
    title: "Web Developer",
    company_name: "BlackBerry",
    icon: blackberry,
    iconBg: "#E6DEDD",
    date: "January 2022 - December 2022",
    points: [
      "Contributed to front-end development within a large team, completing 10+ user interface components with React.",
      "Assisted in implementing responsive design techniques, improving cross-device compatibility.",
      "Collaborated with the quality assurance team to identify and resolve 50+ front-end bugs and issues.",
      "Developed a comprehensive documentation repository to support onboarding and training of future interns.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Canadian International Sports Center",
    icon: cisec,
    iconBg: "#383E56",
    date: "March 2021 - December 2021",
    points: [
      "Developed a user-friendly web-based platform for event registration and management, streamlining the process.",
      "Integrated third-party APIs for payment processing and communication, enabling seamless transactions.",
      "Optimized the center's internal systems by implementing automated data processing and analytics, improving efficiency.",
      "Collaborated with the IT team to ensure the platform's security and data privacy, implementing industry best practices.",
    ],
  },
  {
    title: "Software Developer I",
    company_name: "strelka.tech",
    icon: strelka,
    iconBg: "#383E56",
    date: "April 2019 - November 2020",
    points: [
      "Developed 3 full-stack web applications using React, Node.js, and Python, contributing to successful project completion.",
      "Assisted in implementing microservices architecture in 2 projects, supporting the team in reducing development time.",
      "Participated in Agile development processes, quickly adapting to the methodology.",
      "Collaborated in designing and developing 5 RESTful APIs, helping to improve application interoperability.",
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
    name: "WrapUps - tackling food waste in Russia",
    description:
      "Developed a food-waste reduction app, for the Russian market, connecting consumers with local food establishments offering surplus food at reduced prices.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "DostOvoz - Uzbek conversational AI",
    description:
      "Developed an Uzbek-language chatbot, DostOvoz, enabling users to interact in Uzbek and receive AI-powered responses based on ChatGPT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Minecraft-inspired voxel world with three.js",
    description:
      "Created a browser-based voxel world using Three.js. Developed an environment with five distinct block textures and a flat landscape. Check out minecraft.akamalov.com!",
    tags: [
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abrkamalov/minecraft-three.js",
  },
];

export { services, technologies, experiences, testimonials, projects };