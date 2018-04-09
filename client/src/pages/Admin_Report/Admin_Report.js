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
        alertData: [],
        medications: [],

    };
    
componentDidMount() {
    console.log(window.location.search.substring(4))
    this.loadPatientData();
};

//"5ac93b9bbddfdc49cc7e66d5"
loadPatientData = event => {
    patientAPI.findPatientInfoForAdmin(window.location.search.substring(4))
        .then(res => {

            //console.log(res.data)

            this.setState({patient: res.data});
            this.setState({patientDetails: this.state.patient.details})
            this.setState({patientAppt: this.state.patient.appointment})
            this.setState({patientEpisodes: this.state.patient.episode})

            this.setState({patientLastEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1] })
            this.setState({patientLastEpisodeStart: this.state.patientLastEpisode.start_date})
            this.setState({patientLastEpisodeMeds: this.state.patientLastEpisode.medications})

            console.log(this.state.patientLastEpisodeMeds)

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
            let alertData = [];

            let i=0, j=-1;

            for (i=0; i<8; i++) {

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
                headache[j].push(record.side_effects.headaches);
                drymouth[j].push(record.side_effects.drymouth);
                    
                previousRecordDate = currentRecordDate;
            }

            
                for (i=0; i<timePoints.length; i++) {
                    kickinAverages[i] = Number((kickin[i].reduce((a, b) => a + b) / kickin[i].length).toFixed(1))
                    wearoffAverages[i] = Number((wearoff[i].reduce((a, b) => a + b) / wearoff[i].length).toFixed(1))
                    movementAverages[i] = Number((movement[i].reduce((a, b) => a + b) / movement[i].length).toFixed(1))
                    sleepyAverages[i] = Number((sleepy[i].reduce((a, b) => a + b) / sleepy[i].length).toFixed(1))
                    offtimeAverages[i] = Number((offtime[i].reduce((a, b) => a + b) / offtime[i].length).toFixed(1))
                    tremorAverages[i] = Number((tremor[i].reduce((a, b) => a + b) / tremor[i].length).toFixed(1))
                    walkingAverages[i] = Number((walking[i].reduce((a, b) => a + b) / walking[i].length).toFixed(1))
                    balanceAverages[i] = Number((balance[i].reduce((a, b) => a + b) / balance[i].length).toFixed(1))
                    sicknessAverages[i] = Number((sickness[i].reduce((a, b) => a + b) / sickness[i].length).toFixed(1))
                    dizzinessAverages[i] = Number((dizziness[i].reduce((a, b) => a + b) / dizziness[i].length).toFixed(1))
                    headacheAverages[i] = Number((headache[i].reduce((a, b) => a + b) / headache[i].length).toFixed(1))
                    drymouthAverages[i] = Number((drymouth[i].reduce((a, b) => a + b) / drymouth[i].length).toFixed(1))

                }

                let averages = [];
                let averageSy = [];
                let averageSe = [];

                for (i=0; i<timePoints.length; i++) {
                    averages = [];
                    averages.push(kickinAverages[i])
                    averages.push(wearoffAverages[i])
                    averages.push(movementAverages[i])
                    averages.push(sleepyAverages[i])
                    averages.push(offtimeAverages[i])
                    averages.push(tremorAverages[i])
                    averages.push(walkingAverages[i])
                    averages.push(balanceAverages[i])

                    averageSy[i] = (averages.reduce((a, b) => a + b) /averages.length).toFixed(1)

                    averages = [];
                    averages.push(sicknessAverages[i])
                    averages.push(dizzinessAverages[i])
                    averages.push(headacheAverages[i])
                    averages.push(drymouthAverages[i])

                    averageSe[i] = (averages.reduce((a, b) => a + b) /averages.length).toFixed(1)
                }

            let obj = {};
            for (i=0; i<timePoints.length; i++) {

                obj = {
                    Name: timePoints[i], 
                    Kickin: kickinAverages[i], 
                    Wearoff: wearoffAverages[i],
                    Movement: movementAverages[i], 
                    Tiredness: sleepyAverages[i],
                    Offtime: offtimeAverages[i],
                    Tremor: tremorAverages[i],
                    Walking: walkingAverages[i],
                    Balance: balanceAverages[i],
                    All: averageSy[i],

                    Sickness: sicknessAverages[i],
                    Dizziness: dizzinessAverages[i],
                    Headache: headacheAverages[i],
                    Drymouth: drymouthAverages[i],
                    All: averageSe[i]
                    };

                chartData.push(obj) 
            }
        

            this.setState({ chartData: chartData })
            this.setState({ chartTimes: timePoints.length})
           console.log("aa" + this.state.chartData)


            for (i=0; i<this.state.patientLastEpisodeNumRecords; i++) {
                
                record = this.state.patientLastEpisodeRecords[i];
                currentRecordDate = record.date_time.slice(0,10); 
                recordTime = record.date_time.slice(11,16);

                if (i>1 && currentRecordDate != previousRecordDate) { 
                    alertData.push(obj);
                    obj = {} 
                 }

                obj = {
                    name: currentRecordDate,
                    Falls: record.emergencies.falls ? (obj.Falls ? Number(obj.Falls)+1 : 1) : (obj.Falls ? Number(obj.Falls) : 0),
                    Choking: record.emergencies.choking ? (obj.Choking ? Number(obj.Choking)+1 : 1) : (obj.Choking ? Number(obj.Choking) : 0),
                    Freezing: record.emergencies.freezing ? (obj.Freezing ? Number(obj.Freezing)+1 : 1) : (obj.Freezing ? Number(obj.Freezing) : 0),
                    Hallucinations: record.emergencies.hallucination ? (obj.Hallucinations ? Number(obj.Hallucinations)+1 : 1) : (obj.Hallucinations ? Number(obj.Hallucinations) : 0)
                }

                previousRecordDate = currentRecordDate;
                console.log(obj)

            }

            alertData.push(obj);

            console.log("a " + alertData)
            this.setState({alertsData: alertData})
            console.log("b " + this.state.alertsData[0].Falls)

        })
        .catch(err => console.log(err));
};


    render() {
        return (
            <Container>
                <ReportHeader />
                <hr />
                <Container fluid>
                    <Row>
                        <Col md='6'>
                            <PatientInfo 
                                patientNumber = {this.state.patientDetails.patient_number}
                                firstName = {this.state.patientDetails.first_name}
                                lastName = {this.state.patientDetails.last_name}
                            />
                            {/* <Video /> */}
                        </Col>

                        <Col md='6'>
                            <EpisodeInfo 
                                episodeDate = {this.state.patientLastEpisodeStart}
                                episodeCount = {this.state.patientLastEpisodeNumRecords}
                                episodeDays = {this.state.patientLastEpisodeNumRecords/this.state.chartTimes}
                            />
                            
                        </Col>
                    </Row>

                    <Row>

                        <Col md='6'>
                            <Container className="text-left">
                                Patient video posted on : {this.props.video_datetime}
                                <Button size="sm" style={{padding: 6}} onClick = {() => this.onClickedVideo()}>View video</Button>
                            </Container>
                        </Col>

                        <Col md='6'>                     
                            <Container className="text-right">
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedCurrent()}>Current episode</Button>
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedSidePrevious()}>Previous episode</Button>
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedFive()}>Last 5 episodes</Button>
                            </Container>
                        </Col>

                    </Row>

                    <Row>
                        <Col md='4'>
                            <Medication
                                medications = {this.state.patientLastEpisodeMeds}
                            />
                            
                        </Col>
                        <Col md='8'>
                            <Chart 
                                lineChartData = {this.state.chartData}
                                barChartData =  {this.state.alertsData}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
};

export default Admin_Report;
