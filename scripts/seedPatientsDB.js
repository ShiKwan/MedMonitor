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



const patient_dataSeed = [
    {
      date_created: new Date("2018-04-07T00:00:00.000Z"),
      active: true,
      physician: "5ac7ae215a77e145a4d86147",      //doctor: to be populated with _id from doctors collection
      
      details: {
        patient_number: "hosp00",
        first_name:  "Cary",
        last_name: "Garant",
        dob: "03/12/1959",
        email: "cary@microsoft.com",
        phone: "123-534-5673"
      },
  
        appointment: {
          next_appt: new Date("2018-04-012T10:00:00.000Z"),
          comments: "Look forward to seeying Ya"
      },
  
        episode: [{
            episode_id: "001",
            start_date: new Date("2018-04-07T08:00:00.000Z"),
            physician: "Dr John Heyworth",
    
            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }, 
            {
                medication: "Apomorphine (carbidopa/levodopa)",
                dose: "10mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }],
  
            record: [
            {
                date_time: new Date("2018-04-07T08:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {
                    falls: false,
                    freezing: false,
                    choking: false,
                    hallucination: false,
                },
                symptoms: {
                    kickin: 3,
                    wearoff: 4,
                    movement: 3,
                    sleepy: 4,
                    offtime: 3,
                    tremor: 4,
                    walking: 4,
                    balance: 4,
                },
                side_effects: {
                    sickness: 1,
                    dizziness: 2,
                    headaches: 1,
                    drymouth: 4,
                },
                notes: "",
            },
            {
                date_time: new Date("2018-04-07T12:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {
                    falls: false,
                    freezing: false,
                    choking: false,
                    hallucination: false,
                },
                symptoms: {
                    kickin: 2,
                    wearoff: 4,
                    movement: 3,
                    sleepy: 4,
                    offtime: 3,
                    tremor: 4,
                    walking: 4,
                    balance: 4,
                },
                side_effects: {
                    sickness: 1,
                    dizziness: 2,
                    headaches: 1,
                    drymouth: 4,
                },
                notes: "",
            },
            {
                date_time: new Date("2018-04-07T16:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {
                    falls: false,
                    freezing: false,
                    choking: false,
                    hallucination: false,
                },
                symptoms: {
                    kickin: 4,
                    wearoff: 4,
                    movement: 3,
                    sleepy: 4,
                    offtime: 3,
                    tremor: 4,
                    walking: 4,
                    balance: 4,
                },
                side_effects: {
                    sickness: 1,
                    dizziness: 2,
                    headaches: 1,
                    drymouth: 4,
                },
                notes: "",
            },
            {
                date_time: new Date("2018-04-07T20:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {
                    falls: false,
                    freezing: false,
                    choking: false,
                    hallucination: false,
                 },
                symptoms: {
                    kickin: 1,
                    wearoff: 4,
                    movement: 3,
                    sleepy: 4,
                    offtime: 3,
                    tremor: 4,
                    walking: 4,
                    balance: 4,
                },
                side_effects: {
                    sickness: 1,
                    dizziness: 2,
                    headaches: 1,
                    drymouth: 4,
                },
                notes: "",
           
            },
            {
                date_time: new Date("2018-04-08T08:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T12:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 4, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T16:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 5, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T20:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 5, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T08:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T12:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 4, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T16:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 5, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            },
            {
                date_time: new Date("2018-04-08T20:00:00.000Z"),
                meds_taken: true,
                // can add more detailed record of medications taken and notes here if required
                emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                symptoms: {kickin: 5, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 4},
                side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
            }


         ] // end of record array
     }]
}];



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