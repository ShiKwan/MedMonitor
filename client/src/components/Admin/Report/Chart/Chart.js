import React, { Component } from 'react';
import {LineChart, Line, BarChart, Bar,
        XAxis, 
        YAxis, 
        Tooltip, 
        Legend,
        ResponsiveContainer
    } from 'recharts';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';




export default class Chart extends React.Component {

    state = {

        symptomChart: true,
        sideEffectChart: false,
        alertChart: false
    }

    onClickedSymptoms(id) {
        this.setState({symptomChart: true})
        this.setState({sideEffectChart: false})
        this.setState({alertChart: false})
       
    }

    onClickedSideEffects(id) {
        this.setState({symptomChart: false})
        this.setState({sideEffectChart: true})
        this.setState({alertChart: false})
    }

    onClickedAlerts(id) {
        this.setState({symptomChart: false})
        this.setState({sideEffectChart: false})
        this.setState({alertChart: true})
       
    }

    onClickedCurrent(id) {
       
    }

    onClickedSidePrevious(id) {
       
    }

    onClickedFive(id) {
       
    }


    render () {
        return (
            
            <div  style={{height: "100%"}}>

                <div   style={{border: '1px solid grey', padding: 20, display: this.state.symptomChart ? "block" : "none"}}>
                    <h4 className="text-left">Parkinson's symptoms by time of day/medication time </h4>

                    <Button size="sm" style={{padding: 6, margin: 6, border: '3px solid black'}} onClick = {() => this.onClickedSymptoms()}>Symptoms</Button>
                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedSideEffects()}>Side effects</Button>
                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedAlerts()}>Alerts</Button>

                    <LineChart width={700} height={350} data={this.props.lineChartData} margin={{top: 10, right: 30, left: 0, bottom: 0}} >
                        <Line type='monotone' dataKey='Kickin' strokeDasharray="3 4 5 2" stroke="green" />
                        <Line type='monotone' dataKey='Wearoff' strokeDasharray="3 4 5 2" stroke="magenta" />
                        <Line type='monotone' dataKey='Movement' strokeDasharray="3 4 5 2" stroke="yellow" />
                        <Line type='monotone' dataKey='Tiredness' strokeDasharray="3 4 5 2" stroke="purple" />
                        <Line type='monotone' dataKey='Offtime' strokeDasharray="3 4 5 2" stroke="red" />
                        <Line type='monotone' dataKey='Tremor' strokeDasharray="3 4 5 2" stroke="cyan" />
                        <Line type='monotone' dataKey='Walking' strokeDasharray="3 4 5 2" stroke="grey" />
                        <Line type='monotone' dataKey='Balance' strokeDasharray="3 4 5 2" stroke="blue" />
                        <Line type='monotone' dataKey='Average' stroke="black" strokeWidth={5}/>
                        
                        <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                        {/* <Tooltip /> */}
                        <Legend align="right" verticalAlign="top" layout="vertical" wrapperStyle={{ padding: 10, fontWeight: 600, top: 40, right: 20, border: '1px solid grey', borderRadius: 3}} />
                    </LineChart>
                </div>
            
                <div style={{border: '1px solid grey', padding: 20, display: this.state.sideEffectChart ? "block" : "none"}}>
                    <h4 className="text-left">Side effects experienced by time of day/medication time </h4>

                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedSymptoms()}>Symptoms</Button>
                    <Button size="sm" style={{padding: 6, margin: 6, border: '3px solid black'}} onClick = {() => this.onClickedSideEffects()}>Side effects</Button>
                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedAlerts()}>Alerts</Button>

                    <LineChart width={700} height={350} data={this.props.lineChartData} margin={{top: 10, right: 30, left: 0, bottom: 0}} >
                        <Line type='monotone' dataKey='Sickness' strokeDasharray="3 4 5 2" stroke="green" />
                        <Line type='monotone' dataKey='Dizziness' strokeDasharray="3 4 5 2" stroke="magenta" />
                        <Line type='monotone' dataKey='Headache' strokeDasharray="3 4 5 2" stroke="yellow" />
                        <Line type='monotone' dataKey='Drymouth' strokeDasharray="3 4 5 2" stroke="purple" />
                        <Line type='monotone' dataKey='Average_' stroke="black" strokeWidth={5}/>
                        
                        <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                     {/* <Tooltip /> */}
                     <Legend align="right" verticalAlign="top" layout="vertical" wrapperStyle={{ padding: 10, fontWeight: 600, top: 40, right: 20, border: '1px solid grey', borderRadius: 3}} />
                    </LineChart> 
                </div>

                
                <div style={{border: '1px solid grey', padding: 20, display: this.state.alertChart ? "block" : "none"}}>
                    <h4 className="text-left">Emergency alerts by date. </h4>

                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedSymptoms()}>Symptoms</Button>
                    <Button size="sm" style={{padding: 6, margin: 6}} onClick = {() => this.onClickedSideEffects()}>Side effects</Button>
                    <Button size="sm" style={{padding: 6, margin: 6, border: '3px solid black'}} onClick = {() => this.onClickedAlerts()}>Alerts</Button>

                    <BarChart width={700} height={350} data={this.props.barChartData} margin={{top: 10, right: 30, left: 0, bottom: 0}} >
                        <Bar dataKey='Falls' stackId="a" fill="#0080ff" />
                        <Bar dataKey='Freezing' stackId="a" fill="#ff4000" />
                        <Bar dataKey='Choking' stackId="a" fill="#ffcc00" />
                        <Bar dataKey='Hallucinations' stackId="a" fill="#9900ff" />
                        <YAxis ticks={[2,4,6,8]} />
                        <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
                     {/* <Tooltip /> */}
                     <Legend align="right" verticalAlign="top" layout="vertical" wrapperStyle={{ padding: 10, fontWeight: 600, top: 40, right: 20, border: '1px solid grey', borderRadius: 3}} />
                    </BarChart> 
                </div>

            </div>

        )
    }
}           