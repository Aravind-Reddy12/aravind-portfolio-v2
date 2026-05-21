export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#00F5D4",
    icon: "⬡",
    skills: [
      { name: "Vue 3" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML / CSS" },
      { name: "Vite" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#FF6B6B",
    icon: "◈",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "Python" },
    ],
  },
  {
    id: "database",
    label: "Database & Infra",
    color: "#FFC247",
    icon: "◉",
    skills: [
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "BullMQ" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "#9D8DF1",
    icon: "◎",
    skills: [
      { name: "Git / GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "AWS" },
      { name: "Go.js" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);
