const express = require("express");
const employeeSchema = require("../models/employeemodel");

;

const router = express.Router();

// get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await employeeSchema.find();
    res.json(employees);
  } catch (error) {
    res.send("ERROR 💥", error);
  }
});

// get one employee
router.get("/:id", async (req, res) => {
  try {
    const employee = await employeeSchema.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.send("ERROR 💥", error);
  }
});

// create new employee
router.post("/", async (req, res) => {
  const newEmployee = new employeeSchema({
    name: req.body.name,
    email: req.body.email,
    phoneno: req.body.phoneno,
    role: req.body.role,
    address: req.body.address,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update employee
router.patch("/:id", async (req, res) => {
  try {
    const updateemployee = await employeeSchema.findById(req.params.id);
    updateemployee.role = req.body.role;
    const updatedEmployee = await updateemployee.save();

    res.status(201).json(updatedEmployee);
  } catch (error) {
   res.status(500).json({ error: error.message });
  }
});


// removw employee
router.delete("/:id", async (req, res) => {
   try {
     const removedEmployee = await employeeSchema.deleteOne({ _id: req.params.id });
     res.status(201).json(removedEmployee);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 });
 

module.exports = router;
