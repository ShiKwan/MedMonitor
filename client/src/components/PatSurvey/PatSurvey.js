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


var questions = [{
    
    survHeader: 'MEDICATION',
    question: 'Are You Current With Your Parkinson Medication?',
    answers: ['Yes, I Am', 'No, I Am Not'],
    color: ['green', 'red'],
    value: [0, 4],
    className: ['survRadBtnGreen', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'SYMPTOMS',
    question: 'Since taking your LAST Parkinson medication: have you had any:',
    answers: ['Falls', 'Freezing Of Gait', 'Choking', 'Hallucinations', 'None Of These'],
    color: ['red', 'red', 'red', 'red', 'green'],
    value: [4, 4, 4, 4, 0],
    className: ['survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnGreen'],
    selectionType: "checkbox"
},

{
    survHeader: 'Kick In',
    question: 'Since taking your LAST Parkinson medication: how long did it take to kick in?',
    answers: ['Immediately', 'Quickly', 'Awhile', 'Very Late', 'Never'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'Wearing Off',
    question: 'Since taking your LAST Parkinson medication: if wearing off, how long ago.?',
    answers: ['Still Nothing', '15 Minutes Ago', '45 Minutes Ago', '1 Hour And 15 MInutes Ago', '2 Hours Ago'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},
{
    survHeader: 'ACTIVITY',
    question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to do normal activities',
    answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'MOVEMENT',
    question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to move comfortable?',
    answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'OFF TIME',
    question: 'Right Now: do you feel off (slow, stiff, difficult to walk)?',
    answers: ['Normal', 'A Little Slow', 'Slow', 'Very Slow', 'Can\'t Move At All'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'TREMORS',
    question: 'Right Now: if you suffer from tremor, how is it now?',
    answers: ['No Tremor', 'Bothering Me A Little', 'Worse Than Normal', 'Quite Bad', 'Very Bad, Can\'t Do Normal Tasks'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'STIFFNESS',
    question: 'Right Now: how is your stiffness?',
    answers: ['No Stiffness', 'A Little Stiff', 'Quite Stiff', 'Very Stiff', 'So Stiff Can\'t Move'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'WALKING',
    question: 'Right Now: how is your walking?',
    answers: ['Good', 'A Little Slow', 'Slower Than Normal', 'Very Slow, Shuffling', 'Can\'t Walk At All'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"
},

{
    survHeader: 'BALANCE',
    question: 'Right Now: how is your balance when you stand or walk?',
    answers: ['Good', 'A Little Unsteady', 'Unsteady', 'Very Unsteady, Worry About Falling', 'Too Unsteady To Stand Or Walk'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"

},

{
    survHeader: 'SLEEPY',
    question: 'Since taking your LAST Parkinson medication: how tired have you been?',
    answers: ['Not At All', 'Some', 'Sleepy', 'Very Sleepy', 'Exhausted All The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio"

}
];





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
        
        <Container fluid className="patSurvey">
                
                <Card className="introsurvCard" fluid body inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                <CardHeader tag="h4" className="introsurvCardHeader">PLEASE TAKE THIS SHORT SURVEY</CardHeader>
            </Card>

            
        {
        questions.map( x => {
            return(
                x.selectionType  === "radio" ?
                    // create radio button here
                    <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                    <CardHeader tag="h4" className="patSurveyHeader">{x.survHeader}</CardHeader>
                    <Card className="surveyQuestions">
                    <CardText className="surveyQandA"><h4>{x.question}</h4></CardText>

                    <div className="survRadGroup">
                        {x.answers.map( (answer, index) => {
                            return(
                                <Button
                                    id = {`${x.survHeader}`}
                                    className={`${x.className[index]} survRadBtn`}
                                    color= {`${x.color[index]}`}
                                    onClick={() => this.onRadioBtnClick(`${answer}`)}
                                    active={this.state.rSelected === `${answer}` }
                                    value={`${answer}`}
                                >
                                    <h4>{`${answer}`}</h4>
                                </Button>
                            )
                        })
                        }
                    </div>
                    <br>
                    </br>
                    <p className="radSelected">You Selected: {this.state.rSelected}</p>

                    <Button className="questSubmitBtn" color="secondary" size="lg" block><h4>Submit Your Answer</h4></Button>
                    </Card>
                    </Card>           
                :   
                
                    <Card className="patSurveyCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                    <CardHeader tag="h4" className="patSurveyHeader">{x.survHeader}</CardHeader>
                    <Card className="surveyQuestions">
                    <CardText className="surveyQandA"><h4>{x.question}</h4></CardText>

                    <div className="survChkGroup">
                        {x.answers.map((answer, index) => {
                            return (
                                <Button
                                    id={`${x.survHeader}`}
                                    className={`${x.className[index]} survChkBtn`}
                                    color={`${x.color[index]}`}
                                    onClick={() => this.onCheckboxBtnClick(`${answer}`)}
                                    active={this.state.cSelected.includes `${answer}`}
                                    value={`${answer}`}
                                >
                                    <h4>{`${answer}`}</h4>
                                </Button>
                            )
                        })
                        }
                    </div>
                    <br>
                    </br>
                    <p className="chkSelected">You Selected: {JSON.stringify(this.state.cSelected)}</p>

                    <Button className="questSubmitBtn" color="secondary" size="lg" block><h4>Submit Your Answer</h4></Button>
                    </Card>
                    </Card>
            )
            })
            }
                
        </Container>

        
        );
    }
}

export default PatSurvey;

