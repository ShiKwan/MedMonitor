import React, { Component } from 'react';
import {LineChart, 
        Line, 
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

// const data = [
//         {name: 'Day 1', dizziness: 4, sleepy: 1, headaches: 3},
//         {name: 'Day 2', dizziness: 3, sleepy: 2, headaches: 2},
//         {name: 'Day 3', dizziness: 2, sleepy: 4, headaches: 0},
//         {name: 'Day 4', dizziness: 1, sleepy: 4, headaches: 1},
//         {name: 'Day 5', dizziness: 3, sleepy: 3, headaches: 0},
//         {name: 'Day 6', dizziness: 4, sleepy: 2, headaches: 1},
//         {name: 'Day 7', dizziness: 1, sleepy: 1, headaches: 0}
// ]
export default class Chart extends React.Component {
    render () {
        return (
            
            <ResponsiveContainer className="text-right" width={800} height="100%">
                <LineChart width={800} height={500} data={this.props.plotData}>
                    <Line type='monotone' dataKey='kickin' stroke="#8884d8" />
                    <Line type='monotone' dataKey='wearoff' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='movement' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='sleepy' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='offtime' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='tremor' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='walking' stroke="#aaa4d8" />
                    <Line type='monotone' dataKey='balance' stroke="#aaa4d8" />
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>

        )
    }
}           