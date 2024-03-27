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
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "React js Developer",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Laravel  Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Development and maintenance of web applications using Laravel and other related technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementation of responsive design and guarantee of cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-end Developer",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develop and maintain web applications using PHP Laravel and other related technologies.",
      "Collaborate with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Participate in code reviews and provide constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, React.js, and Bootstrap to create interactive and user-friendly user interfaces.",
      "Collaborating with multidisciplinary teams including designers, product managers, and other developers to design and deliver high-quality products, while meeting deadlines and functional requirements.",
      "Implementing responsive designs to ensure optimal user experience across different devices and browsers, while maintaining cross-browser compatibility to ensure maximum accessibility.",
      "Actively participating in code reviews by providing constructive feedback to other developers, thereby contributing to the continuous improvement of code and development practices.",
    ],
  },
  {
    title: "full stack  developer",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Reda optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Api search movies",
    description:
      "Search results are displayed clearly and concisely, showing the title of the movie, possibly a brief description or additional information, and options to learn more about the movie.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "REACT JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/houmani18/app-api",
  },
  {
    name: "Portfolio",
    description:
      "Users can search for specific items in my portfolio using relevant keywords such as skills, previous projects, technologies used, etc.can contact you directly if they are interested in your work .",
    tags: [
      {
        name: "REACT JS",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/houmani18/REDA_HOUMANI",
  },
  {
    name: " hotel management system",
    description:
      "The system must allow customers to reserve rooms online, with the possibility of choosing the type of room, and making payment.",
    tags: [
      {
        name: "REACT JS",
        color: "blue-text-gradient",
      },
      {
        name: "LARAVEL",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
