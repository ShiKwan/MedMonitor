// import React from 'react';
import React, { Component } from "react";

import "./PatSurvey.css";

import { 
    Container,
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


class PatSurvey extends Component {
    constructor(props) {
        super(props);

        this.state = { cSelected: [] };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

    render() {
        return (
        <Container className="patSurvey">
            <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
            {/* <Card className="physInfoCard" body outline color="info"> */}
                <CardHeader tag="h4"  className="patSurveyHeader">How Are You Feeling</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText>Survey Question?</CardText>
                        <h5>Radio Buttons</h5>
                        <ButtonGroup>
                            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
                        </ButtonGroup>
                        <p>Selected: {this.state.rSelected}</p>

                    </Card>
            </Card>
        </Container>
        );
    }
}

export default PatSurvey;

