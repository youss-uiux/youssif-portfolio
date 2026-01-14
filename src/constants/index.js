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
  zedpay,
  unn, issaka, ouaraqua, ahmad
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
      date: "Jan 2023 - Nov 2024",
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
      date: "Sep 2023 - Nov 2024",
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
      date: "Jan 2024 - Nov 2024",
      points: [
        "Developing and maintaining web applications using Angular ASP.NET and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Zedpay Africa",
      icon: zedpay,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Jan 2025",
      points: [
        "Developing and maintaining web applications using Angular Tailwind CSS and Java and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer (Spring Boot & Microservices)",
      company_name: "Zedpay Africa",
      icon: zedpay,
      iconBg: "#383E56",
      date: "Jan 2025 - Present",
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
        "Youssif has a strong ability to understand both technical and business requirements. He doesn’t just write code—he designs scalable, well-structured solutions with a clear focus on performance and user experience. His technical mindset is impressive.",
      name: "Issaka Ardaly",
      designation: "CEO & CTO",
      company: "Gabera Software Solutions",
      image: issaka,
    },
    {
      testimonial:
        "Working with Youssif was a great experience. He is reliable, proactive, and highly results-driven. He quickly understands product vision and translates it into clean, modern, and efficient digital solutions. A developer you can truly rely on.",
      name: " Mohamed Ouaraqua Dantchiawa",
      designation: "CTO",
      company: "Zedpay Africa",
      image: ouaraqua,
    },
    {
      testimonial:
        "Youssif stands out for his ability to combine design, performance, and business logic. He consistently suggests valuable improvements and anticipates technical needs. His professionalism and passion for development clearly set him apart.",
      name: "Ibrahim Ahmad",
      designation: "Founder",
      company: "Alfajar Academy",
      image: ahmad,
    },
  ];
  
  const projects = [
    {
      name: "Université Numérique de Niger",
      project: github,
      description:
          "The Université Numérique de Niger website serves as the digital gateway to higher education in Niger. It showcases the country’s institutions, academic programs and training opportunities, latest news and announcements, and official documents and resources. Visitors can explore participating institutions, view program details and admission information, follow updates and events, and download official forms, regulations, and academic materials. The site aims to improve accessibility, transparency, and collaboration across Niger’s higher education landscape.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: unn,
      source_code_link: "https://github.com/",
    },
    {
      name: "Youss Burger",
      project: github,
      description:
          "Web-based platform that lets users browse a fast-food menu, customize items, place pickup or delivery orders, track order status in real-time, and pay securely.",
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
        "A modern e-commerce app for ordering shoes that lets users browse a curated catalog, filter by size, brand, color, and price, and view high‑resolution images and 360° previews. Customers can add items to a cart, choose delivery or pickup, pay with multiple payment methods, track orders in real time, save favorites to a wishlist, and request easy returns or exchanges. The app also supports size recommendations, personalized promotions, and an admin dashboard for inventory, orders, and analytics.",
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
          "A pharmacy management and online medicine discovery platform that enables users to search for, compare, and order medications from local pharmacies, manage prescriptions, and check real-time product availability and details.",
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
        "A modern travel app that helps users discover and book hotels and find local events to attend. Main capabilities:\n" +
          "\\- Discover and compare hotels by location, price, rating, amenities, and availability.\n" +
          "\\- Browse events by category, date and map; view details, schedules and organizer info.\n" +
          "\\- Reserve rooms and register\\/buy event tickets with secure payment and confirmation.\n" +
          "\\- Personalized recommendations, wishlists, and booking history.\n" +
          "\\- Maps, directions, calendar sync and push notifications for reminders and updates.\n" +
          "\\- User profiles, ratings, reviews and social sharing.",
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
          "A prototype application for combating climate change: it offers concrete actions to adopt (transport, food, energy, consumption), personalized plans, community challenges, progress tracking, and educational resources to reduce CO2 emissions.",
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
        "A modern, responsive e-commerce web application for selling shoes. It features a clean product catalog with high-resolution images, advanced filtering and search, secure checkout and multiple payment options, user accounts with order history and wishlists, product reviews and ratings, and an admin dashboard for inventory, orders, and analytics. Designed for fast performance and a seamless user experience on both mobile and desktop.",
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
          "A mobile educational app designed for deaf and hard-of-hearing learners. It delivers sign-language video lessons with synchronized captions and transcripts, gesture-based navigation, interactive visual exercises, offline lesson downloads, real-time speech-to-text for live sessions, and teacher tools to create accessible sign-friendly content.",
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