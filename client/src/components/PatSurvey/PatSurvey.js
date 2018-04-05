// import React from 'react';
import React, { Component } from "react";

import "./PatSurvey.css";
import QCheckbox from "../Patient/Survey/Checkbox";
import QRadio from "../Patient/Survey/Radio";
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
    question: 'Are You Current With Your Parkinson\'s Medication?',
    answers: ['Yes, I Am', 'No, I Am Not'],
    color: ['green', 'red'],
    value: [0, 4],
    className: ['survRadBtnGreen', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 1,
    questionNum : 0
},

// ---------- emergncy symptoms questions ---------

{
    survHeader: 'WORRYING SYMPTOMS',
    question: 'Since taking your LAST Parkinson\'s medication: have you had any:',
    answers: ['Falls', 'Freezing Of Gait', 'Choking on food', 'Hallucinations', 'None Of These'],
    color: ['red', 'red', 'red', 'red', 'green'],
    value: [4, 4, 4, 4, 0],
    className: ['survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnGreen'],
    selectionType: "checkbox",
    answered : '',
    firstQuestion : 0,
    questionNum : 1
},

// ---------- general parkinson's questions ---------

{
    survHeader: 'KICK In',
    question: 'Since taking your LAST Parkinson\'s medication: how long did it take to kick in?',
    answers: ['Immediately', 'After 15 Minutes', 'After 30 Minutes', 'After 1 Hour', 'After More Than 1 Hour'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 2
},

{
    survHeader: 'WEARING OFF',
    question: 'Since taking your LAST Parkinson\'s medication: if wearing off, how long ago.?',
    answers: ['Did Not Wear Off', '15 Minutes Ago', '30 Minutes Ago', '1 Hours Ago', 'More Than 1 hour Ago'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 3
},

{
    survHeader: 'MOVEMENT',
    question: 'Since taking your LAST Parkinson\s medications: how much of the time have you been able to move comfortable?',
    answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 4
},

{
    survHeader: 'SLEEPY',
    question: 'Since taking your LAST Parkinson\'s medication: how tired have you been?',
    answers: ['Not Tired At All', 'Some Tiredness', 'Sleepy', 'Very Sleepy', 'Exhausted All The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 5

},

{
    survHeader: 'OFF TIME',
    question: 'Right Now: do you feel off (slow, stiff, difficulty walking)?',
    answers: ['Normal', 'A Little Slow', 'Slow', 'Very Slow', 'Can\'t Move At All'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 6
},

{
    survHeader: 'TREMORS',
    question: 'Right Now: if you suffer from tremor, how is it now?',
    answers: ['No Tremor', 'Bothering Me A Little', 'Worse Than Normal', 'Quite Bad', 'Very Bad, Can\'t Do Normal Tasks'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 7
},

{
    survHeader: 'WALKING',
    question: 'Right Now: how is your walking?',
    answers: ['Good', 'A Little Slow', 'Slower Than Normal', 'Very Slow, Shuffling', 'Can\'t Walk At All'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 8
},

{
    survHeader: 'BALANCE',
    question: 'Right Now: how is your balance when you stand or walk?',
    answers: ['Good', 'A Little Unsteady', 'Unsteady', 'Very Unsteady, Worry About Falling', 'Too Unsteady To Stand Or Walk'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 9
},

// ---------- side effects questions ---------

{
    survHeader: 'NAUSEA AND VOMITING',
    question: 'Since taking your last Parkinson\s medication: Have you had any nausea or sickness?',
    answers: ['None', 'A little nausea', 'Frequent nausea', 'Continual nausea', 'Vomiting'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 10
},

{
    survHeader: 'DIZZINESS/LIGHTHEADEDNESS',
    question: 'Since taking your last Parkinson\s medication: Have you felt dizzy or lightheaded?',
    answers: ['None', 'Very occasionally', 'Yes, when I stand up', 'All the time', 'To dizzy to stand up'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 11
},

{
    survHeader: 'HEADACHES',
    question: 'Since taking your last Parkinson\s medication: Have you had any headache?',
    answers: ['None', 'A little/occasionally', 'Mild/continual', 'Quite severe/on and off', 'Severe/all the time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 12
},

{
    survHeader: 'DRY MOUTH/BLURRED VISIONM',
    question: 'Since taking your last Parkinson\s medication: Have you had any feelings of dry mouth and/or blurred vision?',
    answers: ['None', 'Occasionally', 'On and off', 'Most of the time', 'All the time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 13
},


];





class PatSurvey extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            questions : questions,
            completed : [],
        })
    }
    // Handle notification from a child slide that we should move to the next
    handlePopulate = () => {
        console.log(this.state);
    }
    handleCompletedCallback = (surveyHeader, answer) => {
        console.log("Survey header : " + surveyHeader);
        console.log("Answer : ", answer);
        let newCompleted = this.state.completed;
        newCompleted[surveyHeader] = answer
        this.setState({
            completed : newCompleted
        })
    };

    handleQuestionCallback = () =>{
        //splice
        let newQuestions = questions
        newQuestions.splice(0,1);
        if(newQuestions.length > 0 ){
            newQuestions[0].firstQuestion = 1;
            this.setState({
                questions : newQuestions
            })
        }
    }

    render() {
        return (
        this.state.questions.length > 0 ?
            <Container fluid className="patSurvey">
                <Button onClick={this.handlePopulate}>Show State</Button>
                <Card className="introsurvCard" fluid body inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                    <CardHeader tag="h4" className="introsurvCardHeader">PLEASE TAKE THIS SHORT SURVEY</CardHeader>
                </Card>
                {
                    this.state.questions.map( (x,i) => {
                        return(
                        this.state.questions ?
                            x.selectionType  === "radio" ?
                                <QRadio
                                    key = {x.survHeader}
                                    survHeader = {x.survHeader}
                                    question = {x.question}
                                    answers = {x.answers}
                                    selectionType = {x.selectionType}
                                    className = {x.className}
                                    color = {x.color}
                                    answered = {x.answered}
                                    firstQuestion = {x.firstQuestion}
                                    questionNum = {x.questionNum}
                                    handleCompletedCallback = {this.handleCompletedCallback}
                                    handleQuestionCallback = {this.handleQuestionCallback}
                                >
                                </QRadio>
                            :   
                                <QCheckbox
                                    key = {x.survHeader}
                                    survHeader = {x.survHeader}
                                    question = {x.question}
                                    answers = {x.answers}
                                    selectionType = {x.selectionType}
                                    className = {x.className}
                                    color = {x.color}
                                    answered = {x.answered}
                                    firstQuestion = {x.firstQuestion}
                                    questionNum = {x.questionNum}
                                    handleCompletedCallback = {this.handleCompletedCallback}
                                    handleQuestionCallback = {this.handleQuestionCallback}
                                >
                                </QCheckbox>
                        :
                        null
                        )
                    })
                }
                    
            </Container>
            :
            <Label>You have completed the questionaires</Label>

        
        );
    }
}

export default PatSurvey;

