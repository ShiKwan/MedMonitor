import React, { Component } from "react";
import '../Admin/Admin.css';
import patientAPI from "../../utils/patientAPI";
import moment from 'moment'
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

        patientEpisodeStart: "",
        patientEpisodeMeds: [],
        patientEpisodeNumRecords: 0,
        timePoints: [],
        lineChartData: [],
        barChartData: [],

        medsBoxTitle: "",
    };
    
    componentDidMount() {
        console.log(window.location.search.substring(4))
        this.loadPatientData();
    };


    //"5ac93b9bbddfdc49cc7e66d5"
    loadPatientData = event => {
        patientAPI.findPatientInfoForAdmin(window.location.search.substring(4))
            .then(res => {

                let chartData = [];

                //console.log(res.data)
                this.setState({patient: res.data});
                this.setState({patientDetails: this.state.patient.details});
                this.setState({patientAppt: this.state.patient.appointment});

                chartData = this.processEpisode(this.state.patient, 1);

                this.setState({ patientEpisodeStart: chartData[0] });
                this.setState({ patientEpisodeMeds: chartData[1] });
                this.setState({ patientEpisodeNumRecords: chartData[2] });
                this.setState({ timePoints: chartData[3] });
                this.setState({ lineChartData: chartData[4] });
                this.setState({ barChartData: chartData[5] });

                this.setState({medsBoxTitle: "Current Medications"})
  
            })
            .catch(err => console.log(err));
    };


    onClickedCurrent = () => {

        let chartData = [];

        chartData = this.processEpisode(this.state.patient, 1);

        this.setState({ patientEpisodeStart: chartData[0] });
        this.setState({ patientEpisodeMeds: chartData[1] });
        this.setState({ patientEpisodeNumRecords: chartData[2] });
        this.setState({ timePoints: chartData[3] });
        this.setState({ lineChartData: chartData[4] });
        this.setState({ barChartData: chartData[5] });

        this.setState({medsBoxTitle: "Current Medications"})
 
    }


    onClickedPrevious = () => {

        let chartData = [];

        chartData = this.processEpisode(this.state.patient, 2);

        this.setState({ patientEpisodeStart: chartData[0] });
        this.setState({ patientEpisodeMeds: chartData[1] });
        this.setState({ patientEpisodeNumRecords: chartData[2] });
        this.setState({ timePoints: chartData[3] });
        this.setState({ lineChartData: chartData[4] });
        this.setState({ barChartData: chartData[5] });

        this.setState({medsBoxTitle: "Previous Medications"})

    }

    onClickedFive = () => {

    }


    processEpisode = (patient, episode) => {

        const patientEpisodes = patient.episode;
        const patientEpisode =  patientEpisodes[patientEpisodes.length - episode];
        const patientEpisodeStart = patientEpisode.start_date;
        const patientEpisodeMeds = patientEpisode.medications;
        const patientEpisodeRecords = patientEpisode.record;
        const patientEpisodeNumRecords = patientEpisodeRecords.length;

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
        let lineChartData = [];
        let barChartData = [];

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
        
        for (i=0; i<patientEpisodeNumRecords; i++) {
            
            record = patientEpisodeRecords[i];
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
                name: timePoints[i], 
                Kickin: kickinAverages[i], 
                Wearoff: wearoffAverages[i],
                Movement: movementAverages[i], 
                Tiredness: sleepyAverages[i],
                Offtime: offtimeAverages[i],
                Tremor: tremorAverages[i],
                Walking: walkingAverages[i],
                Balance: balanceAverages[i],
                Average: averageSy[i],

                Sickness: sicknessAverages[i],
                Dizziness: dizzinessAverages[i],
                Headache: headacheAverages[i],
                Drymouth: drymouthAverages[i],
                Average_: averageSe[i]
                };

            lineChartData.push(obj) 
            //console.log(obj)
        }


        for (i=0; i<patientEpisodeNumRecords; i++) {
            
            record = patientEpisodeRecords[i];
            currentRecordDate = record.date_time.slice(0,10); 
            recordTime = record.date_time.slice(11,16);

            if (i>1 && currentRecordDate != previousRecordDate) { 
                barChartData.push(obj);
                obj = {} 
            }

            obj = {
                name: moment(currentRecordDate).format('l'),
                Falls: record.emergencies.falls ? (obj.Falls ? Number(obj.Falls)+1 : 1) : (obj.Falls ? Number(obj.Falls) : 0),
                Choking: record.emergencies.choking ? (obj.Choking ? Number(obj.Choking)+1 : 1) : (obj.Choking ? Number(obj.Choking) : 0),
                Freezing: record.emergencies.freezing ? (obj.Freezing ? Number(obj.Freezing)+1 : 1) : (obj.Freezing ? Number(obj.Freezing) : 0),
                Hallucinations: record.emergencies.hallucination ? (obj.Hallucinations ? Number(obj.Hallucinations)+1 : 1) : (obj.Hallucinations ? Number(obj.Hallucinations) : 0)
            }

            previousRecordDate = currentRecordDate;
            
        }

        barChartData.push(obj);
        //console.log(obj);

        let data=[];
        data.push(patientEpisodeStart);
        data.push(patientEpisodeMeds);
        data.push(patientEpisodeNumRecords);
        data.push(timePoints);
        data.push(lineChartData);
        data.push(barChartData);

        return data;

    }


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
                                episodeDate = {this.state.patientEpisodeStart}
                                episodeCount = {this.state.patientEpisodeNumRecords}
                                episodeDays = {this.state.patientEpisodeNumRecords/this.state.timePoints.length}
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
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedPrevious()}>Previous episode</Button>
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedFive()}>Last 5 episodes</Button>
                                <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedBack()}>&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;</Button>
                            </Container>
                        </Col>

                    </Row>

                    <Row>
                        <Col md='4'>
                            <Medication
                                medications = {this.state.patientEpisodeMeds}
                                title = {this.state.medsBoxTitle}
                            />
                            
                        </Col>
                        <Col md='8'>
                            <Chart 
                                lineChartData = {this.state.lineChartData}
                                barChartData =  {this.state.barChartData}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
};

export default Admin_Report;
