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
        let times = []
        this.state.medication.map((x) => {
            x.times.map((time) =>{
                if(times.includes(time)){
                    console.log("it's in the array, don't do shit")
                }else{
                    times.push(time);
                }
            })
        })
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
   const reminder = {
'summary': `Doctor Appointment with ${this.state.physicianFirstName}, ${this.state.physicianLastName}`,
'location': `${this.state.address} ${this.state.city}`,
'description': `Doctor appointment`,
'start': {
'dateTime': `${this.state.dateTime}` ,
'timeZone': 'America/New_York'
},
'end': {
'dateTime': `${moment(this.state.dateTime).add(1, 'hour').format()}` ,
'timeZone': 'America/New_York'
},
'reminders': {
'useDefault': false,
'overrides': [
    { 'method': 'email', 'minutes': 24 * 60 },
    { 'method': 'popup', 'minutes': 10 }
]
}
};

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
             console.log("event : ", reminder);
             googleAPI.createEvent(localStorage.getItem("access_token"), reminder);
         }
      
      
      
         //  TODO: Persist result in sessionStorage here
       }
     } catch (err) {
         console.log(err);
       // do something or nothing if window still not redirected after login
     }
   }, 100);
 }

    
    render(){
        return (
            <Container fluid className="patMedInfo">
    
                    <Card className="patMedInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                        <Button onClick={ () => `${console.log(this.state)}`}>Test</Button>
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
                                <Button className="patMedRemindBtn" color="secondary" size="lg"><h4>Remind Me!</h4></Button>
                            </div>
                        </Card>
                    </Card>
            </Container>

        );
    };
}
export default PatMedDue;