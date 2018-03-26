const router = require("express").Router();
const doctorRoutes = require("./doctor");
const patientRoutes = require("./patient");
const userRoutes = require("./user");
const medicationRoutes = require("./medication");

//  routes
router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/medication", medicationRoutes);
router.use("/user", userRoutes);

module.exports = router;
