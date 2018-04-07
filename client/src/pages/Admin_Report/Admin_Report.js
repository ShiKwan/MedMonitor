import React, { Component } from "react";
import '../Admin/Admin.css';
import patientAPI from "../../utils/patientAPI";
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container,
    Row, 
    Col
} from 'reactstrap';
import Chart from "../../components/Admin/Report/Chart";
import Video from "../../components/Admin/Report/Video";
import EpisodeInfo from "../../components/Admin/Report/EpisodeInfo";
import ReportHeader from "../../components/Admin/Report/Header";
import Medication from "../../components/Admin/Report/Medication";
import PatientInfo from "../../components/Admin/Report/PatientInfo";

class Admin_Report extends Component {
    state = { 
        patientId: "",

        patient: {},
        patientDetails: [],
        patientAppt: [],
        patientEpisodes: [],
    
        patientLastEpisode: [],
        patientLastEpisodeStart: "",
        patientLastEpisodeMeds: [],
    
        patientLastEpisodeRecords: [],
        patientLastEpisodeNumRecords: 0,

        chartData: [],

    };
    
componentDidMount() {
    this.setState({patientId: window.location.search});
    console.log("patientId: " + this.state.patientId);
    this.loadPatientData();
};


loadPatientData = event => {
    event.preventDefault();
    patientAPI.findPatientInfoForAdmin("5ac93b9bbddfdc49cc7e66d5")
        .then(res => {

            console.log(res.data)

            this.setState({patient: res.data});
            this.setState({patientDetails: this.state.patient.details})
            this.setState({patientAppt: this.state.patient.appointment})
            this.setState({patientEpisodes: this.state.patient.episode})

            this.setState({patientLastEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1] })
            this.setState({patientLastEpisodeStart: this.state.patientLastEpisode.start_date})
            this.setState({patientLastEpisodeMeds: this.state.patientLastEpisode.medications})

            this.setState({patientLastEpisodeRecords: this.state.patientLastEpisode.record})
            this.setState({patientLastEpisodeNumRecords: this.state.patientLastEpisodeRecords.length})

            let record = [];
            let currentRecordDate = "";
            let previousRecordDate = "";
            let recordTime = "";

            let kickin = []; 
            let wearoff = []; 
            let movement = [];
            let sleepy = [];
            let offtime = [];
            let tremor = [];
            let walking = [];
            let balance = [];
            let sickness = [];
            let dizziness = [];
            let headache = [];
            let drymouth = [];
            let timePoint = [];

            let kickinAverages = []; 
            let wearoffAverages = []; 
            let movementAverages = [];
            let sleepyAverages = [];
            let offtimeAverages = [];
            let tremorAverages = [];
            let walkingAverages = [];
            let balanceAverages = [];
            let sicknessAverages = [];
            let dizzinessAverages = [];
            let headacheAverages = [];
            let drymouthAverages = [];

            let timePoints = [];
            let chartData = [];

            let i=0, j=-1;

            for (i=0; i<6; i++) {

                kickin.push( [] ); 
                wearoff.push( [] ); 
                movement.push( [] );
                sleepy.push( [] );
                offtime.push( [] );
                tremor.push( [] );
                walking.push( [] );
                balance.push( [] );
                sickness.push( [] );
                dizziness.push( [] );
                headache.push( [] );
                drymouth.push( [] );
        }
            
            for (i=0; i<this.state.patientLastEpisodeNumRecords; i++) {
                
                record = this.state.patientLastEpisodeRecords[i];
                currentRecordDate = record.date_time.slice(0,10); 
                recordTime = record.date_time.slice(11,16);

                j<1 || currentRecordDate == previousRecordDate ? j++ : j=0;

                timePoints[j] = recordTime;

                kickin[j].push(record.symptoms.kickin);
                wearoff[j].push(record.symptoms.wearoff);
                movement[j].push(record.symptoms.movement);
                sleepy[j].push(record.symptoms.sleepy);
                offtime[j].push(record.symptoms.offtime);
                tremor[j].push(record.symptoms.tremor);
                walking[j].push(record.symptoms.walking);
                balance[j].push(record.symptoms.balance);
                sickness[j].push(record.side_effects.sickness);
                dizziness[j].push(record.side_effects.dizziness);
                headache[j].push(record.side_effects.headache);
                drymouth[j].push(record.side_effects.drymouth);
                    
                previousRecordDate = currentRecordDate;
            }

            let array = []; 
            for (i=0; i<timePoints.length; i++) {

                kickinAverages[i] = (kickin[i].reduce((a, b) => a + b)/ kickin[i].length).toFixed(1);
                wearoffAverages[i] = (wearoff[i].reduce((a, b) => a + b) / wearoff[i].length).toFixed(1)
                movementAverages[i] = (movement[i].reduce((a, b) => a + b) / movement[i].length).toFixed(1)
                sleepyAverages[i] = (sleepy[i].reduce((a, b) => a + b) / sleepy[i].length).toFixed(1)
                offtimeAverages[i] = (offtime[i].reduce((a, b) => a + b) / offtime[i].length).toFixed(1)
                tremorAverages[i] = (tremor[i].reduce((a, b) => a + b) / tremor[i].length).toFixed(1)
                walkingAverages[i] = (walking[i].reduce((a, b) => a + b) / walking[i].length).toFixed(1)
                balanceAverages[i] = (balance[i].reduce((a, b) => a + b) / balance[i].length).toFixed(1)
                sicknessAverages[i] = (sickness[i].reduce((a, b) => a + b) / sickness[i].length).toFixed(1)
                dizzinessAverages[i] = (dizziness[i].reduce((a, b) => a + b) / dizziness[i].length).toFixed(1)
                headacheAverages[i] = (headache[i].reduce((a, b) => a + b) / headache[i].length).toFixed(1)
                drymouthAverages[i] = (drymouth[i].reduce((a, b) => a + b) / drymouth[i].length).toFixed(1)
            }
            
            let obj = {};
            for (i=0; i<timePoints.length; i++) {

                obj = {
                    name: timePoints[i], 
                    kickin: kickinAverages[i], 
                    wearoff: wearoffAverages[i],
                    movement: movementAverages[i], 
                    sleepy: sleepyAverages[i],
                    offtime: offtimeAverages[i],
                    tremor: tremorAverages[i],
                    walking: walkingAverages[i],
                    balance: balanceAverages[i],

                    sickness: sicknessAverages[i],
                    dozziness: dizzinessAverages[i],
                    headache: headacheAverages[i],
                    drymouth: drymouthAverages[i]
                    };

                chartData.push(obj) 
            }
        
            this.setState({ chartData: chartData })

            console.log(chartData)
            console.log(this.state.chartData)

        })
        .catch(err => console.log(err));
};


    render() {
        return (
            <Container fluid>
                <ReportHeader />
                <hr />
                <Container fluid>
                    <Row>
                        <Col md='6'>
                            <PatientInfo />
                        </Col>
                        <Col md='6'>
                            <EpisodeInfo />
                            <Video />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <Medication />
                        </Col>
                        <Col md='9'>
                            <Chart 
                                plotData = {this.state.chartData}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
};

export default Admin_Report;
