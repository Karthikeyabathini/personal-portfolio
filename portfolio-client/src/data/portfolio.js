import { FaCode, FaDatabase, FaGraduationCap, FaMedal, FaRocket, FaServer } from "react-icons/fa";

export const profile = {
  name: "Karthik",
  profession: "Full Stack Software Engineer",
  email: "karthik@example.com",
  phone: "+1 555 012 3456",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  intro:
    "I build fast, accessible, production-grade web applications with React, Node.js, Express, and MongoDB."
};

export const typingRoles = ["Full Stack Developer", "React Engineer", "Node.js Developer", "Problem Solver"];

export const aboutCards = [
  {
    icon: FaCode,
    title: "Biography",
    text:
      "A product-minded engineer focused on clean architecture, thoughtful UX, and reliable delivery across the stack."
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    text: "Computer Science foundation with continuous learning in cloud deployment, API design, and modern frontend systems."
  },
  {
    icon: FaServer,
    title: "Experience",
    text: "Hands-on experience building REST APIs, admin dashboards, authentication flows, and responsive web apps."
  },
  {
    icon: FaMedal,
    title: "Achievements",
    text: "Delivered maintainable projects with performance-minded interfaces, secure auth, and deployment-ready workflows."
  }
];

export const skills = [
  ["HTML", 95],
  ["CSS", 92],
  ["JavaScript", 90],
  ["React", 88],
  ["Node.js", 86],
  ["Express", 84],
  ["MongoDB", 82],
  ["MySQL", 78],
  ["Java", 76],
  ["Python", 80],
  ["Git", 87],
  ["GitHub", 89]
].map(([name, level]) => ({ name, level }));

export const stats = [
  { label: "Projects", value: 24, icon: FaRocket },
  { label: "Technologies", value: 16, icon: FaDatabase },
  { label: "Happy Clients", value: 12, icon: FaMedal }
];
