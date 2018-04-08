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

const data = [
        {name: 'Day 1', dizziness: 4, sleepy: 1, headaches: 3},
        {name: 'Day 2', dizziness: 3, sleepy: 2, headaches: 2},
        {name: 'Day 3', dizziness: 2, sleepy: 4, headaches: 0},
        {name: 'Day 4', dizziness: 1, sleepy: 4, headaches: 1},
        {name: 'Day 5', dizziness: 3, sleepy: 3, headaches: 0},
        {name: 'Day 6', dizziness: 4, sleepy: 2, headaches: 1},
        {name: 'Day 7', dizziness: 1, sleepy: 1, headaches: 0}
]
export default class Chart extends React.Component {

    render () {
        return (
            
            <ResponsiveContainer className="text-right" width={800} height="100%">
                <LineChart width={800} height={500} data={this.props.plotData}>
                    <Line type='monotone' dataKey='kickin' stroke="#000000" />
                    <Line type='monotone' dataKey='wearoff' stroke="#222222" />
                    <Line type='monotone' dataKey='movement' stroke="#444444" />
                    <Line type='monotone' dataKey='sleepy' stroke="#888888" />
                    <Line type='monotone' dataKey='offtime' stroke="#aaaaaa" />
                    <Line type='monotone' dataKey='tremor' stroke="#cccccc" />
                    <Line type='monotone' dataKey='walking' stroke="#dddddd" />
                    <Line type='monotone' dataKey='balance' stroke="#eeeeee" />
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>

        )
    }
}           