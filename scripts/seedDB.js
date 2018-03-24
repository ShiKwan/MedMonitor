const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Database name = 'medmonitordb'
// This file empties the respective collections and inserts the seed data below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/medmonitordb",
  {
    useMongoClient: true
  }
);

// Medication collection seeds

const medicationSeed = [
  {
    name: "Sinemet (carbidopa/levodopa)",
    type: "Dopamine agonist",
    doses: [
      {dose: "10mg/100mg", form: "tablet", route: "oral"},
      {dose: "25mg/100mg", form: "tablet", route: "oral"},
      {dose: "25mg/250mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Apokyn(Apomorphine)",
    type: "Dopamine agonist",
    doses: [
      {dose: "2mg", form: "injection", route: "sub cutaneous"}
    ]
  }
];

// Doctor collection seeds


const doctorSeed = [
  {
    name: { first: "John", last: "Heyworth" },
    office: "Beachwood medical practice, Beachwood",
    email: "john.heworth@doctor.com",
    phone: "216-395-2345"
  },

  {
    name: { first: "melanie", last: "kopff" },
    office: "Park Road East medical centre, Solon",
    email: "mel.kopffh@doctor.com",
    phone: "216-786-2845"
 },

];

// Patient_data collection seeds

const patient_dataSeed = [
  {
    date_created: Date.now,
    
    active: true,
    //doctor: to be populated with _id from doctors collection
    details: {
      patient_number: "hosp001",
      first_name:  "Bill",
      last_name: "Gates",
      dob: "03/12/1959",
      email: "bill@microsoft.com",
      phone: "123-534-5673",
    },
      appointment: {
        next_appt: Date.now,
        comments: "Look forward to seeying Ya"
    },
      episode: [{
        episode_id: "001",
        start_date: Date.now,
        doctor: "Dr John Heyworth",

        medications: [{
            medication: "Sinemet (carbidopa/levodopa)",
            dose: "10mg/100mg",
            form: "tablet",
            route: "oral",
            times: ["0800", "1200", "1600", "2000"]
        }],

        record: [{
            date: Date.now,
            time: "1000",
            meds_taken: true,
            // can add more detailed record of medications taken and notes here if required
            symptoms: [{
                ontime: 3,
                offtime: 1,
                tremor: 4,
                dexterity: 4,
                stiffness: 3,
                initiation: 2,
                speach: 1,
                walking: 2,
                balance: 1,
                drooling: 1,
                malaise: 2,
            }],

            emergencies: [
              {
                falls: false,
                choking: false,
                hallucination: false,
            }],

            side_effects: [{
                sickness: 2,
                dizziness: 2,
                headaches: 1,
                drymouth: 1,
                urinating: 1,
                indigestion: 1,
            }],

          notes: "",
      }],

    }],
    // timestamps: {'created_at', 'updated_at' }

  },
  // new patient
  {
    date_created: Date.now,

    active: true,
    //doctor: to be populated with _id from doctors collection
    details: {
      patient_number: "hosp023",
      first_name:  "Michael",
      last_name: "Gatsb3",
      dob: "03/11/1959",
      email: "thegatsby@michael.com",
      phone: "123-994-4532",
    },
      appointment: {
        next_appt: Date.now,
        comments: "TAKE THOSE MEDS YOUNG MAN!"
    },
      episode: [{
        episode_id: "001",
        start_date: Date.now,
        doctor: "Dr melanie kopff",

        medications: [{
            medication: "Sinemet (carbidopa/levodopa)",
            dose: "25mg/100mg",
            form: "tablet",
            route: "oral",
            times: ["0600", "1200", "1800"]
        }],

        record: [{
            date: Date.now,
            time: "1200",
            meds_taken: true,
            // can add more detailed record of medications taken and notes here if required
            symptoms: [{
                ontime: 2,
                offtime: 3,
                tremor: 2,
                dexterity: 4,
                stiffness: 4,
                initiation: 4,
                speach: 3,
                walking: 3,
                balance: 2,
                drooling: 1,
                malaise: 3,
            }],

            emergencies: [
              {
                falls: false,
                choking: false,
                hallucination: false,
            }],

            side_effects: [{
                sickness: 1,
                dizziness: 2,
                headaches: 3,
                drymouth: 1,
                urinating: 1,
                indigestion: 1,
            }],

          notes: "its worse than normal this am",
      }],

    }],
     // timestamps: {'created_at', 'updated_at' }

  },
  

];

// Insert seed data into the respective collections

db.Meds
  .remove({})
  .then(() => db.Meds.collection.insertMany(medicationSeed))
  .then(data => {
    console.log(data.insertedIds.length + " medication records inserted!");
  });

db.Doctor
  .remove({})
  .then(() => db.Doctor.collection.insertMany(doctorSeed))
    .then(data => {
      console.log(data.insertedIds.length + " doctors records inserted!");

  });

db.Patient_data
  .remove({})
  .then(() => db.Patient_data.collection.insertMany(patient_dataSeed))
     .then(data => {
      console.log(data.insertedIds.length + " patient_data records inserted!");

      
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
