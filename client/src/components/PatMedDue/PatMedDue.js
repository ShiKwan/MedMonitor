import React, {Component} from "react";
import "./PatMedDue.css";
import patientAPI from "../../utils/patientAPI"
import Rmoment from 'react-moment';
import moment from 'moment';
import gapi from "gapi-client";
import {CLIENT_ID, CLIENT_SECRET } from "../../config/config.js";
import googleAPI from "../../utils/googleAPI";
import { 
    Container,
    Row,
    Col,
    Card,
    Button,
    ButtonGroup,
    CardTitle,
    CardHeader,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

let countDown = (24*60);
let times = []
class PatMedDue extends Component {
    constructor(props){
        super(props)
        this.state = ({
            patientInfo : {},
            medication : [],
            next_appt : ""
        })
    }
    componentDidMount(){
        if(localStorage.getItem("userId")){
            patientAPI.findPatientInfoForPatient(localStorage.getItem("userId").toString())
                .then(res => {
                    console.log("data for patient: ", res.data)
                    this.setState({
                        patientInfo : res.data,
                        medication: res.data.episode[res.data.episode.length-1].medications,
                        next_appt : res.data.appointment.next_appt
                    })
                    console.log("Staate in past med due : ", this.state);
                })
                .catch(err => console.log(err));
        }
    }
    beautifyCountDown = (duration) =>{
        let newDurationHour = parseInt(0)
        newDurationHour = Math.floor(parseInt(duration)/parseInt(60));
        let newDurationMinutes = duration%60;

        console.log(`${newDurationHour} hour${newDurationHour >1 ? `s` : ``} ${newDurationMinutes} minutes`)

        let newDuration = `${newDurationHour} hour${newDurationHour >1 ? `s` : ``} ${newDurationMinutes} minutes`
        return(
            <Container>
                <Label>{newDuration !== "24 hours 0 minutes" ? newDuration : "You do not have any medication due today!"}</Label>
            </Container>
        )

    }
    getMedTimes = () => {
        
        this.state.medication.map((x) => {
            x.times.map((time) =>{
                if(times.includes(time)){
                }else{
                    times.push(time);
                }
            })
        })

        this.populateDateObj()

        return times;
    }

    populateMedDue = () => {
        
        let medicationDue = this.getMedTimes();
        console.log(medicationDue);
        medicationDue.map((x) =>{
            console.log("dealing with : x : " + x );
            let date = moment().format("MM-DD-YYYY");
            let newTime = moment(x, "HHmm").format("hh:mm A")
            console.log("new time: " + newTime);
            let currentDateTime = moment(date + ' ' + newTime)
            currentDateTime = currentDateTime.format("dddd MM-DD-YYYY hh:mm A");
            console.log(currentDateTime);
            if(moment().diff(currentDateTime) < 0){
                console.log("here");
                if(countDown > moment(currentDateTime).diff(moment(), "minutes"))
                countDown = moment(currentDateTime).diff(moment(), "minutes")
            }
            return(
                moment().diff(currentDateTime) < 0?
                    <Container key="index">
                    <br/><Label>Time : {newTime}</Label> 
                    </Container>
                    :
                    null
                
            )
        })
    }


    handleoAuth2TokenGet = event => {
       event.preventDefault();
   // TODO: First try to get the token from sessionStorage here
   // Build the oauth request url
   const responseType = 'token';
   const clientId = CLIENT_ID;
   const redirectUri = "http://localhost:3000/";
   const scope = 'https://www.googleapis.com/auth/calendar';
   const prompt = 'consent';
   const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&prompt=${prompt}`;
   // Open a new window
   const arrReminder = []
   times.map( (x) =>{
       let today = moment().format("MM-DD-YYYY");
       let time = moment(x, "HHmm").format("h:mm a");
       console.log(time);
       let dateTime = moment(today + " " + time).format();
       console.log(dateTime);
       let remindUntil = `RRULE:FREQ=DAILY;UNTIL=${moment(this.state.next_appt).format("YYYYMMDD")}`
        arrReminder.push(
            {
                'summary': `Medication Reminder`,
                'location': `Medication Location`,
                'description': `MedMonitor Reminder`,
                'start': {
                    'dateTime': `${dateTime}` ,
                    'timeZone': 'America/New_York'
                },
                'end': {
                    'dateTime': `${moment(dateTime).add(5, 'minute').format()}` ,
                    'timeZone': 'America/New_York'
                },
                'reminders': {
                'useDefault': false,
                'overrides': [
                    { 'method': 'email', 'minutes': 24 * 60 },
                    { 'method': 'popup', 'minutes': 10 }
                ]
                },
                'recurrence': [
                        remindUntil
                ]
            }
        )
        console.log(arrReminder);
   })

   const win = window.open(url, 'name', 'height=600,width=450');
   if (win) win.focus();
   const pollTimer = window.setInterval(() => {
     try {
       if (!!win && win.location.href.indexOf(redirectUri) !== -1) {
         window.clearInterval(pollTimer);
         // Get the URL hash with your token in it
         const hash = win.location.hash;
         win.close();
         // Parse the string hash and convert to object of keys and values
         const result = hash.substring(1)
           .split('&')
           .map(i => i.split('='))
           .reduce((prev, curr) => ({
             ...prev,
             [curr[0]]: curr[1],
           }), {});
         // Calculate when the token expires and store in the result object
         result.expires_at = Date.now() + parseInt(hash.expires_in, 10);
         console.log(result);
         localStorage.setItem("access_token", result.access_token);
         if(localStorage.getItem("access_token")){
             console.log("event : ", arrReminder);
            // googleAPI.createEvent(localStorage.getItem("access_token"), arrReminder[0]);
             arrReminder.map((x) =>{
                console.log("looping through the events.. ", x);
                googleAPI.createEvent(localStorage.getItem("access_token"), x);
             }) 

         }
      
      
      
         //  TODO: Persist result in sessionStorage here
       }
     } catch (err) {
         console.log(err);
       // do something or nothing if window still not redirected after login
     }
   }, 100);
 }

 populateDateObj = () =>{
     console.log("here");
     const arrReminder = []
   times.map( (x) =>{
       let today = moment().format("MM-DD-YYYY");
       let time = moment(x, "HHmm").format("h:mm a");
       console.log(time);
       let dateTime = moment(today + " " + time).format();
       console.log(dateTime);
       let remindUntil = `RRULE:FREQ=DAILY;UNTIL=${moment(this.state.next_appt).format()}`
        arrReminder.push(
            {
                'summary': `Medication Reminder`,
                'location': `Medication Location`,
                'description': `MedMonitor Reminder`,
                'start': {
                    'dateTime': `${dateTime}` ,
                    'timeZone': 'America/New_York'
                },
                'end': {
                    'dateTime': `${moment(dateTime).add(5, 'minute').format()}` ,
                    'timeZone': 'America/New_York'
                },
                'reminders': {
                'useDefault': false,
                'overrides': [
                    { 'method': 'email', 'minutes': 24 * 60 },
                    { 'method': 'popup', 'minutes': 10 }
                ]
                },
                'recurrence': [
                        remindUntil
                ]
            }
        )
        console.log(arrReminder);
   })
 }

    
    render(){
        return (
            <Container fluid className="patMedInfo">
    
                    <Card className="patMedInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                        <Button onClick={this.populateDateObj}>Test</Button>
                        <CardHeader tag="h4" className="patMedInfoHeader">MEDS DUE TIMES</CardHeader>
                        <Card className="patMedInfoBody">
                            <CardText className="patMedInfoDue"><h4>Your Next Medication(s) Is Due</h4></CardText>
                            <br>
                            </br>
                            <Label className="text-center patMedDueHours">
                                {this.beautifyCountDown(countDown)}
                            </Label>
                            <br>
                            </br>
                            <Label className="text-center patMedDueTime">
                                {this.populateMedDue()}
                            </Label>
                            <br>
                            </br>

                            <div className="patMedDueRemind">
                                <Button className="patMedRemindBtn" color="secondary" size="lg" onClick={(e) =>this.handleoAuth2TokenGet(e)}><h4>Remind Me!</h4></Button>
                            </div>
                        </Card>
                    </Card>
            </Container>

        );
    };
}
export default PatMedDue;