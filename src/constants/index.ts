import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg"

export const INTRO_CONTENT: string = `I am a dedicated and enthusiastic second-year B.Tech CSE student with a keen interest in full-stack development. Although I am in the early stages of my career, I am committed to learning and mastering the craft of building robust and scalable web applications. I am currently developing my skills in front-end and back-end technologies. My aspiration is to leverage my growing expertise to create innovative solutions that enhance business performance and provide exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Aug 2023",
    role: "Contributor",
    company: "GirlScript Summer of Code",
    description: `Gained knowledge in open source development and initiated contributions to various projects.
    Resolved multiple pending issues, improving project functionality and performance`,
    technologies: ["Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Medium Clone",
    image: project1,
    description:
      `Developed a Medium-like blogging site featuring user authentication (signup, signin), blog creation, and   reading functionality. Implemented Prisma for efficient database interaction with PostgreSQL, ensuring robust connection pooling. Leveraged Cloudflare Workers to enhance performance and scalability by deploying serverless functions at the
      edge.`,
    technologies: ["TypeScript", "React.js", "Hono", "Cloudflare Workers", "Prisma", "PostgreSQL", "Tailwind CSS"],
    link:"https://github.com/VoiD254/Medium_Clone"
  },
  {
    title: "EzPay",
    image: project2,
    description:
      `Developed a money transfer application with secure and efficient transaction processing. Implemented transactions and sessions to ensure the secure and reliable transfer of funds.`,
    technologies: ["JavaScript", "MongoDB", "Express", "React", "Tailwind CSS"],
    link:"https://github.com/VoiD254/EzPay"
  },
];

export const CONTACT = {
  email: "kawatraarnav@gmail.com",
};
