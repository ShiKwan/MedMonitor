const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/patient/all" A
router.route("/all")
  .get(patientController.findAll)

// Matches with "/api/patient/contact/:id" A
router
    .route('/contact/:id')
    .put(patientController.update)

// Matches with "/api/patient/disable/:id" A
router
    .route('/disable/:id')
    .put(patientController.update)

// Matches with "/api/patient/appointment/:id" A
    .route('/appointment/:id')
    .put(patientController.update)

// Matches with "/api/patient/forDoctor/:id"
router
    .route("/forDoctor/:id")
    .get(patientController.findById) //A

// Matches with "/api/patient/forPatient/:id" A
router 
    .route('/forPatient/:id')
    .get(patientController.findById);

// Matches with "/api/patient/forDoctor/episode/:id" 
    router 
    .route('/forDoctor/episode/:id')
    .put(patientController.update); //A

// Matches with "/api/patient/forPatient/episode/:id" 
router
    .route('/forPatient/episode/:id')
    .get(patientController.findById); //A
    .put(patientController.update); //A

module.exports = router;
