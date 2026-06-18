import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "A responsive analytics dashboard with protected admin workflows and interactive project metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/saas-dashboard",
    liveDemo: "https://example.com/saas-dashboard"
  },
  {
    title: "E-commerce API",
    description: "A secure REST API for catalog, checkout, authentication, and order management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/ecommerce-api",
    liveDemo: "https://example.com/ecommerce-api"
  },
  {
    title: "Portfolio CMS",
    description: "A full stack portfolio manager with project CRUD, message inbox, and deployment-ready architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Vite", "Express", "MongoDB"],
    github: "https://github.com/yourusername/portfolio-cms",
    liveDemo: "https://example.com/portfolio-cms"
  }
];

const seed = async () => {
  await connectDB();
  await Admin.deleteMany();
  await Project.deleteMany();

  await Admin.create({ username: "admin", password: "admin123" });
  await Project.insertMany(projects);

  console.log("Seed complete. Admin username: admin, password: admin123");
  process.exit(0);
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
