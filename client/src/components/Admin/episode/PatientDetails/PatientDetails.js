import React from 'react';
import moment from 'moment';
import '../../../../pages/Admin';

import {
    Container, 
    Card, 
    CardBody, 
    CardTitle, 
    CardText,
    Button 
} from 'reactstrap';

export default class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.enterEpisodeMedications = this.props.enterEpisodeMedications.bind(this);
    }
    render () {
        return (
            
            <Card className="revPatDetailTableCard TableCard" style={{display: this.props.patientDetailsCard ? "block" : "none"}}>
                <CardBody className="revPatDetailTableBody TableBody">
                    <CardTitle className="revPatDetialTitle Title">Review Patient Details</CardTitle>

                    <Container>
                        <CardText className="revPatDetailCard">
                            <br />
                            Hospital Number: {this.props.patient_number} <br />
                            Name :  {this.props.first_name}&nbsp;{this.props.last_name} <br/>
                            Date of Birth: {moment(this.props.dob).format("dddd, MMMM Do YYYY")} <br /><br />
                            Enrolled: {this.props.date_created} <br />
                            Enrollment status: {this.props.active ? "Active" : "Currently inactive"} <br />
                            E-mail: {this.props.email} <br />
                            Phone: {this.props.phone} <br /><br />
                            Episodes recorded: {this.props.length} <br />
                            Last episode created: {moment(this.props.date_created).format("dddd, MMMM Do YYYY h:mm a")} <br />
                            <br /><br />

                            { this.props.active ?  "" : 
                                "Note, this patient has been marked inactive.\nYou cannot create a new episode for inactive patients."
                                    
                            }
                            
                        </CardText>
                    </Container>

                    <div style={{display: this.props.active ? "block" : "none"}}>
                        <Button className="revPatDetailNextBtn NextBtn" onClick={() => this.props.enterEpisodeMedications()}>Next</Button>
                        <a href={"/admin"}>
                            <Button className="revPatDetailCanelBtn CancelBtn">Cancel</Button>
                        </a> 
                    </div>
                    <div style={{display: !this.props.active ? "block" : "none"}}>
                        <a href={"/admin"}>
                        <Button className="revPatDetailBackBtn BackBtn">Back</Button></a> 
                    </div>
                    
                </CardBody>
            </Card>
        )
    }
}