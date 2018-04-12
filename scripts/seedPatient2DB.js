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
      date_created: new Date("2018-03-07T00:00:00.000Z"),
      active: true,
      physician: "5ac7ae215a77e145a4d86147",      //doctor: to be populated with _id from doctors collection
      
      details: {
        patient_number: "Hosp1274686",
        first_name:  "William",
        last_name: "Spear",
        dob: "03/11/1961",
        email: "romeo@juliet.com",
        phone: "123-534-5123"
      },
  
        appointment: {
          next_appt: new Date("2018-04-16T14:30:00.000Z"),
          comments: "Look forward to seeying Ya"
      },
  
        episode: [{
            episode_id: "001",
            start_date: new Date("2018-03-24T08:00:00.000Z"),
            physician: "Dr John Heyworth",
    
            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "20mg/250mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }, 
            {
                medication: "Apokyn(apomorphine)",
                dose: "10mg",
                form: "subcut",
                route: "injection",
                times: ["0800", "1200", "1600", "2000"]
            }],
  
            record: [
                {
                    date_time: new Date("2018-03-24T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-03-25T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
               
            //
                {
                    date_time: new Date("2018-03-26T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            ] // end of record array

        },
        
        // new episode

        {
            episode_id: "001",
            start_date: new Date("2018-03-28T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1400", "1800", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "subcut",
                route: "injection",
                times: ["0800", "1200", "1600", "2000"]
            }],

            record: [
                {
                    date_time: new Date("2018-03-27T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-03-28T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                //    
                {
                    date_time: new Date("2018-03-29T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-29T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-29T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-29T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                //
                {
                    date_time: new Date("2018-03-30T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },

            ] // end of record array

        }, 

        // new episode  

        {
            episode_id: "001",
            start_date: new Date("2018-04-01T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "subcut",
                route: "injection",
                times: ["0800", "1200", "1600", "2000"]
            }],

            record: [
                {
                    date_time: new Date("2018-03-31T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-04-01T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //    
                {
                    date_time: new Date("2018-04-02T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-02T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-02T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-02T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-04-03T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy:0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },

            ] // end of record array

        },

        //new episode

        {
                episode_id: "001",
                start_date: new Date("2018-04-05T08:00:00.000Z"),
                physician: "Dr John Heyworth",
        
                medications: [{
                    medication: "Sinemet (carbidopa/levodopa)",
                    dose: "10mg/100mg",
                    form: "tablet",
                    route: "oral",
                    times: ["0800", "1200", "1600", "2000"]
                }, 
                {
                    medication: "Apokyn(apomorphine)",
                    dose: "10mg",
                    form: "tablet",
                    route: "oral",
                    times: ["0800", "1200", "1600", "2000"]
                }],
      
                record: [
                    {
                        date_time: new Date("2018-04-05T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                //
                    {
                        date_time: new Date("2018-04-06T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                     },
                //
                    {
                        date_time: new Date("2018-04-07T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                //
                    {
                        date_time: new Date("2018-04-08T08:00:00.000Z"),
                        meds_taken: true,
                        ememergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                    }

                ] // end of record array

        },

        //new episode

        {
            episode_id: "001",
            start_date: new Date("2018-04-09T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1400", "1800", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "subcut",
                route: "injection",
                times: ["0600", "1000", "1800", "1800", "2000"]
            },
            {
                medication: "Cogentin (benztropine)",
                dose: "1mg",
                form: "tablet",
                route: "oral",
                times: ["1000", "1800"]
            },
            {
                medication: "Comtan (entacopone)",
                dose: "200mg",
                form: "tablet",
                route: "oral",
                times: ["0800"]
            }],

            record: [
                {
                    date_time: new Date("2018-04-09T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-09T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                     side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-09T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-09T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-04-10T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-10T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-04-10T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-10T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
            //    
                {
                    date_time: new Date("2018-04-11T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-12T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 8, sleepy: 16, offtime: 12, tremor: 8, walking: 4, balance: 2},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 0, movement: 0, sleepy: 0, offtime: 0, tremor: 0, walking: 0, balance: 0},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 0, drymouth: 0, }, notes: "",
                },

            ] // end of record array

        }] // end last episode
    
    }]; // end of patient 



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