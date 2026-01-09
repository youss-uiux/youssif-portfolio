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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    spring,
    spring_1,
    spring_2,
    angular_grandient,
    angular,
    dotnet,
    postgre,
    youssburger,
    puzzle,
    shoes,
    tourist,
    mataki,
    shoesfigma,
    silented,
    github,
    gabera,
    zedpay
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Angular Developer",
      icon: backend,
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
      name: "Spring boot",
      icon: spring_2,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
    {
      name: "Angular",
      icon: angular_grandient,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Gabera SOftware Solutions",
      icon: gabera,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using HTML CSS JS, ASP .NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "MAUI Developer",
      company_name: "Gabera SOftware Solutions",
      icon: gabera,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using MAUI ASP .NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Gabera SOftware Solutions",
      icon: gabera,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Angular ASP.NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Zedpay",
      icon: zedpay,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Angular Tailwind CSS and Java and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer (Spring Boot & Microservices)",
      company_name: "Zedpay",
      icon: zedpay,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developing and evolving backend features using Spring Boot with reactive and semi-reactive architectures.",
        "Designing and managing a microservices architecture with asynchronous communication using Kafka.",
        "Modeling, optimizing, and maintaining relational databases with PostgreSQL.",
        "Implementing authentication and authorization mechanisms using Keycloak, including role and permission management.",
        "Containerizing and deploying backend services using Docker.",
        "Collaborating closely with frontend teams to integrate Angular applications with backend APIs.",
        "Writing unit and integration tests using Mockito to ensure code reliability and maintainability.",
        "Actively participating in pull request reviews to maintain code quality and consistency across the codebase.",
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
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youss Burger",
      project: github,
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: youssburger,
      source_code_link: "https://github.com/",
    },
    {
      name: "Shoes Marketplace",
      project: github,
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Talwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: shoes,
      source_code_link: "https://github.com/",
    },
    {
      name: "Puzzle Pharm",
      project: github,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "ASP .NET",
          color: "pink-text-gradient",
        },
      ],
      image: puzzle,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tourist Application",
      project: figma,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
      ],
      image: tourist,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mataki",
      project: figma,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "green-text-gradient",
        },
      ],
      image: mataki,
      source_code_link: "https://github.com/",
    },
    {
      name: "Shoes Market ",
      project: figma,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: shoesfigma,
      source_code_link: "https://github.com/",
    },
    {
      name: "Silent education",
      project: figma,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: silented,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };