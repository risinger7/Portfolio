type ProjectData = {
  [key: string]: {
    images: string[];
    title: string;
    content: string;
    color: string | undefined;
  };
};

export const projectData: ProjectData = {
  clira: {
    images: ["/clira/image61.png", "/clira/clira123.jpg"],
    title: "Clira",
    content: "Text om clira here",
    color: "",
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
    content: "Text om phone here",
    color: "",
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
    content: "Text om Remote here",
    color: "",
  },
};
