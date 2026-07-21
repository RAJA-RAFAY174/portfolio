const mongoose = require('mongoose');
const dns = require('dns');
const Project = require('./models/Project');
require('dotenv').config();

// Force Google DNS to fix SRV lookup issues with ISP DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

const initialProjects = [
  {
    title: "AdFlow Pro",
    description: "A Fiverr-style gig marketplace with five user roles and escrow payments.",
    imageUrl: "/ad.png",
    githubUrl: "https://github.com/AWT-SP25-CUI/lab-final-project-RAJA-RAFAY174",
    liveUrl: "",
    technologies: ["MERN", "JWT", "CORS"]
  },

  {
    title: "Geelong Taxi Service",
    description: "A convenient booking and dispatch platform for taxi services in Geelong with real-time tracking.",
    imageUrl: "/gee.png",
    githubUrl: "",
    liveUrl: "https://geelongandcoastaltaxiservice.au/",
    technologies: ["React", "PHP Laravel", "Google Maps"]
  },
  {
    title: "URL Shortener",
    description: "A fast and secure link shortener with detailed analytics tracking and custom alias generation.",
    imageUrl: "/short.png",
    githubUrl: "https://github.com/RAJA-RAFAY174/Shorty-UrlShortner",
    liveUrl: "",
    technologies: ["Node.js", "Express", "MongoDB", "React"]
  },
  {
    title: "Feedback App",
    description: "An interactive feedback collection application featuring sentiment analysis and rating scales.",
    imageUrl: "/feed.png",
    githubUrl: "https://github.com/RAJA-RAFAY174/Feedback_app",
    liveUrl: "",
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"]
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for seeding...');
    await Project.deleteMany({}); // Clear existing
    await Project.insertMany(initialProjects);
    console.log('Database seeded successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
