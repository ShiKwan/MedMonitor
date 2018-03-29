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
    name: "Sinemet CR extended release (carbidopa/levodopa)",
    type: "Dopamine agonist",
    doses: [
      {dose: "25mg/100mg", form: "tablet", route: "oral"},
      {dose: "50mg/200mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Parcopa (carbidopa/levodopa)",
    type: "Dopamine agonist",
    doses: [
      {dose: "10mg/100mg", form: "tablet disintegrating", route: "oral"},
      {dose: "25mg/100mg", form: "tablet disintegrating", route: "oral"},
      {dose: "25mg/250mg", form: "tablet disintegrating", route: "oral"}
    ]
  },

  {
    name: "Rytary extended release (carbidopa/levodopa)",
    type: "Dopamine agonist",
    doses: [
      {dose: "23.75mg/95mg", form: "capsule", route: "oral"},
      {dose: "36.25mg/145mg", form: "capsule", route: "oral"},
      {dose: "48.75mg/195mg", form: "capsule", route: "oral"}
    ]
  },

  {
    name: "Duopa extended release (carbidopa/levodopa)",
    type: "Dopamine agonist",
    doses: [
      {dose: "4.63mg/20mg", form: " single use cassette", route: "enteral suspension"},
    ]
  },

  {
    name: "Mirapex (pramipexole)",
    type: "Dopamine agonist",
    doses: [
      {dose: "0.25mg", form: "tablet", route: "oral"},
      {dose: "0.55mg", form: "tablet", route: "oral"},
      {dose: "1.05mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Mirapex ER extended release (pramipexole)",
    type: "Dopamine agonist",
    doses: [
      {dose: "1.5mg", form: "tablet", route: "oral"},
      {dose: "3.0mg", form: "tablet", route: "oral"},
      {dose: "4.5mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Requip (ropinirole)",
    type: "Dopamine agonist",
    doses: [
      {dose: "1mg", form: "tablet", route: "oral"},
      {dose: "2g", form: "tablet", route: "oral"},
      {dose: "5mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Requip XL extended release (ropinirole)",
    type: "Dopamine agonist",
    doses: [
      {dose: "2mg", form: "tablet", route: "oral"},
      {dose: "4mg", form: "tablet", route: "oral"},
      {dose: "8mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Gocovri  (amantadine)",
    type: "Dopamine agonist",
    doses: [
      {dose: "100mg", form: "tablet", route: "oral"},
      {dose: "50mg/ml", form: "syrup", route: "oral"},
    ]
  },

  {
    name: "Neupro (rotigotine)",
    type: "Dopamine agonist",
    doses: [
      {dose: "1mg/24hr", form: "patch", route: "transdermal"},
      {dose: "4mg/24hr", form: "patch", route: "transdermal"},
      {dose: "8mg/24hr", form: "patch", route: "transdermal"}
    ]
  },

  {
    name: "Apokyn(Apomorphine)",
    type: "Dopamine agonist",
    doses: [
      {dose: "2mg", form: "injection", route: "sub cutaneous"}
    ]
  },

  {
    name: "Cogentin (benztropine)",
    type: "anticholinergic",
    doses: [
      {dose: "0.5mg", form: "tablet", route: "oral"},
      {dose: "1.0g", form: "tablet", route: "oral"},
      {dose: "2.0mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Zelapar (selegiline)",
    type: "MAO-B inhibitor",
    doses: [
      {dose: "1.25mg", form: "tablet/capsule", route: "oral"},
      {dose: "1.0g", form: "tablet/capsule", route: "oral"},
    ]
  },

  {
    name: "Azilect (rasagiline)",
    type: "MAO-B inhibitor",
    doses: [
      {dose: "0.5mg", form: "tablet", route: "oral"},
      {dose: "1.0mg", form: "tablet", route: "oral"},
    ]
  },

  {
    name: "Aricept (donepezil)",
    type: "Anticholinesterase",
    doses: [
      {dose: "5mg", form: "tablet", route: "oral"},
      {dose: "10mg", form: "tablet", route: "oral"},
      {dose: "23mg", form: "tablet", route: "oral"}
    ]
  },

  {
    name: "Exelon (rivastigmine)",
    type: "Anticholinesterase",
    doses: [
      {dose: "1.5mg", form: "tablet", route: "oral"},
      {dose: "3.0", form: "tablet", route: "oral"},
      {dose: "6.0mg", form: "tablet", route: "oral"},
      {dose: "9.5mg", form: "patch", route: "transdermal"}
    ]
  },

  {
    name: "Razadyne (galantamine)",
    type: "Anticholinesterase",
    doses: [
      {dose: "4mg", form: "tablet", route: "oral"},
      {dose: "8mg", form: "tablet", route: "oral"},
      {dose: "4mg", form: "solution", route: "oral"}
    ]
  },

  {
    name: "Namenda (Memantine)",
    type: "NMDA Antagonist",
    doses: [
      {dose: "5mg", form: "tablet", route: "oral"},
      {dose: "10mg", form: "tablet", route: "oral"},
    ]
  },

  {
    name: "Comtan (entacopone)",
    type: "COMT inhibitor",
    doses: [
      {dose: "200mg", form: "tablet", route: "oral"},
    ]
  },

  {
    name: "Stalevo (carbidopa/levodopa/entacapone)",
    type: "Anticholinesterase",
    doses: [
      {dose: "50mg/12.5mg/200mg", form: "tablet", route: "oral"},
      {dose: "100mg/25mg/200mg", form: "tablet", route: "oral"},
      {dose: "200mg/50mg/200mg", form: "tablet", route: "oral"}
    ]
  }


];
// User collection seeds
const userSeed = [
  {
    username: "john",
    password: "$2a$10$SAvF6U2.nGRTGYe2uIpvYuQW30ZDRz0uofxy3exuYNUYr8GssEri2",
    role: "Admin",
    email: "john.heworth@doctor.com"
  },
  {
    username: "melanie",
    password: "$2a$10$3srPp78Me/7mKZa9DSxReOnyYSTi2l7gsvVhCfjmRiDDXfUeqIsfO",
    role: "Admin",
    email: "mel.kopffh@doctor.com"
  }
]
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
    date_created: Date(),
    
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
        next_appt: Date(),
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
            date: Date(),
            time: "1000",
            meds_taken: true,
            // can add more detailed record of medications taken and notes here if required
            symptoms: {
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
            },

            emergencies: 
              {
                falls: false,
                choking: false,
                hallucination: false,
            },

            side_effects: {
                sickness: 2,
                dizziness: 2,
                headaches: 1,
                drymouth: 1,
                urinating: 1,
                indigestion: 1,
            },

          notes: "",
      }],

    }],
    // timestamps: {'created_at', 'updated_at' }

  },
  // new patient
  {
    date_created: Date(),
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
        next_appt: Date(),
        comments: "TAKE THOSE MEDS YOUNG MAN!"
    },
      episode: [{
        episode_id: "001",
        start_date: Date(),
        doctor: "Dr melanie kopff",

        medications: [{
            medication: "Sinemet (carbidopa/levodopa)",
            dose: "25mg/100mg",
            form: "tablet",
            route: "oral",
            times: ["0600", "1200", "1800"]
        }],

        record: [{
            date: Date(),
            time: "1200",
            meds_taken: true,
            // can add more detailed record of medications taken and notes here if required
            symptoms: {
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
            },

            emergencies: 
              {
                falls: false,
                choking: false,
                hallucination: false,
            },

            side_effects: {
                sickness: 1,
                dizziness: 2,
                headaches: 3,
                drymouth: 1,
                urinating: 1,
                indigestion: 1,
            },

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
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
    .then(data =>{
      console.log(data.insertedIds.length + " users records inserted!");
    })
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
