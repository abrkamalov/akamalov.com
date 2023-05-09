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
    title: "Software Engineer II",
    company_name: "DreamLaunch",
    icon: dreamlaunch,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developed the front end for 2 working prototypes of the company's core product, with TypeScript, React, and Redux to create engaging and user-friendly interfaces that received positive feedback from 100 event attendees.",
      "Collaborated closely with the back-end team to ensure seamless integration with the prototypes, enabling efficient data exchange and smooth user interactions.",
      "Actively participated in user testing and feedback sessions during events, incorporating insights to iterate on and improve the prototypes, leading to a 20% increase in user satisfaction.",
      "Contributed to the Agile development process within the startup environment, ensuring rapid iteration and adaptation to changing requirements, enabling the successful delivery of prototypes for live testing.",
    ],
  },
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
      "Participated in weekly knowledge-sharing sessions and team workshops, expanding my technical skill set.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Canadian International Sport & Educational Center",
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
      " Participated in Agile development processes, quickly adapting to the methodology.",
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