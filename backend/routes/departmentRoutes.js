const express = require("express");
const router = express.Router();
const Department = require("../models/department");

// GET all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST a new department
router.post("/", async (req, res) => {
  const { name, description, image } = req.body;
  const newDepartment = new Department({ name, description, image });

  try {
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
