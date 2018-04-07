import React, {Component} from "react";
import "./PatMedDue.css";
import patientAPI from "../../utils/patientAPI"
import Rmoment from 'react-moment';
import moment from 'moment';

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
            medication : []
        })
    }
    componentDidMount(){
        if(localStorage.getItem("userId")){
            patientAPI.findPatientInfoForPatient(localStorage.getItem("userId").toString())
                .then(res => {
                    console.log("data for patient: ", res.data)
                    this.setState({
                        medication: res.data.episode[0].medications,
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
                <Label>{newDuration}</Label>
            </Container>
        )

    }
    populateMedDue = () => {
        console.log("in med due : " , this.state.medication[0])
        return(
            this.state.medication ?   
                this.state.medication.map((x) =>{

                    return(
                        x.times.map((y,index) =>{
                            
                            let date = moment().format("MM-DD-YYYY")
                            let newTime = moment(y, "HHmm").format("hh:mm A")
                            let currentDateTime = moment(date + ' ' + newTime)
                            currentDateTime = currentDateTime.format("dddd MM-DD-YYYY hh:mm A");
                            if(moment().diff(currentDateTime) < 0){
                                if(countDown > moment(currentDateTime).diff(moment(), "minutes"))
                                countDown = moment(currentDateTime).diff(moment(), "minutes")
                            }
                            return(
                                moment().diff(currentDateTime) < 0 ?
                                    <Container key="index">
                                    <Label>{currentDateTime}</Label> 
                                    </Container>
                                    :
                                    null
                                
                            )
                        })
                        
                    )
                })
            : null
        )
    }
    
    render(){
        return (
            <Container fluid className="patMedInfo">
    
                    <Card className="patMedInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
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