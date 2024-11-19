type ProjectData = {
  [key: string]: {
    images: string[];
    title: string;
    content: string;
    color: string | undefined;
    icons: string[] | undefined;
    link: string | undefined;
    githubLink: string | undefined;
  };
};

export const projectData: ProjectData = {
  clira: {
    images: ["/clira/image61.png", "/clira/clira123.jpg"],
    title: "Clira",
    content:
      "Clira is a startup focused on transforming the procurement landscape by streamlining processes through advanced web technology. With a focus on both public and private procurements, Clira’s mission is to maximize competition while minimizing corruption. During my 8-month internship, I contributed to the platform by building features with a modern tech stack, including Laravel, React, Next.js, and Docker. For my final project at Clira, I developed an inventory feature based on a provided design, enabling customers to manage their stock more efficiently. This experience strengthened my skills in both frontend and backend development and taught me how to navigate a professional environment, enhancing my ability to work both collaboratively and independently as a programmer. If you are still greeted by an AI-picture when clicking the link below, I apologize in advance.",
    color: "clira-pink",
    icons: ["Next.js", "React", "Laravel", "Docker", "AWS"],
    link: "https://www.clira.io/",
    githubLink: "",
  },
  game: {
    images: [
      "/game/snappyblock1.png",
      "/game/snappyblock2.png",
      "/game/snappyblock3.png",
      "/game/snappyblock-start.jpg",
    ],
    title: "Snappyblock",
    content:
      "Snappyblock is a mobile game developed as an individual project using Expo, React Native, and Matter.js, inspired by the classic Flappy Bird. I implemented core game mechanics, including game logic, game loop, and entity creation, and added sound effects while managing game state. This project significantly deepened my understanding of both game development and mobile app development.",
    color: "snappy-yellow",
    icons: ["Expo", "Matter.js", "React Native"],
    link: "",
    githubLink: "https://github.com/risinger7/Snappy-block",
  },
  toys: {
    images: ["/toys/toys3.png", "/toys/toys1.png", "/toys/toys4.png"],
    title: "Rejoi",
    content:
      "Rejoi is a project dedicated to promoting sustainability by reducing waste and encouraging the reuse of toys. The platform connects families looking to give away gently used toys with those in need, creating an easy way to give toys a second life. This was my first project using React and working collaboratively with others. My primary focus was on implementing secure user authentication, where I learned about JWT tokens and security best practices. Although the website is no longer active and was created mainly for learning purposes, it provided me with foundational experience in frontend development and secure login systems.",
    color: "rejoi-blue",
    icons: ["Next.js", "React"],
    link: "",
    githubLink: "https://github.com/nawrazaltai/toys_project",
  },

  firstwebsite: {
    images: ["/karaoke/karaoke1.png", "/karaoke/karaoke1.png"],
    title: "Karaoke suggestions",
    content:
      "This was my first-ever website—a karaoke suggestion tool. It wasn’t very functional, but it taught me the basics of CSS and the fundamentals of building a project from scratch.",
    color: "",
    icons: ["Javascript", "CSS"],
    link: "https://risinger7.github.io/Karaoke-suggestions/",
    githubLink: "",
  },
  phone: {
    images: [
      "/phone/phone-side.jpg",
      "/phone/phone-persp.jpg",
      "/phone/phone-back.jpeg",
      "/phone/phone-back2.jpg",
      "/phone/phone-front.jpg",
    ],
    title: "Phone",
    content:
      "For the final assignment in my industrial CAD design course, I created a cellphone model. I began with a simple foundation and gradually added complexity as I refined the design. The entire process was carried out in Autodesk Alias using surface modeling techniques. Once the model was complete, I transitioned to Autodesk VRED to create detailed renders. I'm extremely pleased with the final result—a sleek and slim-looking phone that reflects both functionality and aesthetic appeal.",
    color: "",
    icons: ["Autodesk Alias", "VRED"],
    link: "",
    githubLink: "",
  },
  remote: {
    images: [
      "/remote/remote-persp-back.jpg",
      "/remote/remote-side.jpg",
      "/remote/remote-front.jpg",
      "/remote/remote-corner.jpg",
      "/remote/remote-persp-front.jpg",
    ],
    title: "Remote",
    content:
      "One of the first CAD models I ever created was in Autodesk Alias. After mastering the basics of surface modeling, we were introduced to one of our final projects: designing a remote control. For this project, I envisioned a remote control for a smart TV. My goal was to reduce the number of buttons typically found on conventional remotes. Rather than overwhelming users with numerous options, I focused on simplifying the design by emphasizing essential functions like navigation arrows and a central home button. The final design aimed to create an intuitive and streamlined user experience, eliminating the clutter of unnecessary buttons while still offering the core functionality needed for smart TV control.",
    color: "",
    icons: ["Autodesk Alias", "VRED"],
    link: "",
    githubLink: "",
  },
};
