const router = require("express").Router();
const doctorRoutes = require("./doctor");
const patientRoutes = require("./patient");
const userRoutes = require("./user");
const mailerRoutes = require("./mailer");
const medicationRoutes = require("./medication");

//  routes
router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/medication", medicationRoutes);
router.use("/user", userRoutes);
router.use("/mailer", mailerRoutes);
module.exports = router;
