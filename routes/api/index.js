const router = require("express").Router();
const doctorRoutes = require("./doctor");
const patientRoutes = require("./patient");
//const userRoutes = require("./user");
const medicationRoutes = require("./medication");

// Book routes
router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/medication", medicationRoutes);

module.exports = router;
