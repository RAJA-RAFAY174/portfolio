const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new project (For admin use)
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    githubUrl: req.body.githubUrl,
    liveUrl: req.body.liveUrl,
    technologies: req.body.technologies
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a project by ID
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    await project.deleteOne();
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
