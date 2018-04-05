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
    question: 'Are You Current With Your Parkinson Medication?',
    answers: ['Yes, I Am', 'No, I Am Not'],
    color: ['green', 'red'],
    value: [0, 4],
    className: ['survRadBtnGreen', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 1,
    questionNum : 0
},

{
    survHeader: 'SYMPTOMS',
    question: 'Since taking your LAST Parkinson medication: have you had any:',
    answers: ['Falls', 'Freezing Of Gait', 'Choking', 'Hallucinations', 'None Of These'],
    color: ['red', 'red', 'red', 'red', 'green'],
    value: [4, 4, 4, 4, 0],
    className: ['survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnRed', 'survChkBtnGreen'],
    selectionType: "checkbox",
    answered : '',
    firstQuestion : 0,
    questionNum : 1
},

{
    survHeader: 'Kick In',
    question: 'Since taking your LAST Parkinson medication: how long did it take to kick in?',
    answers: ['Immediately', 'Quickly', 'Awhile', 'Very Late', 'Never'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 2
},

{
    survHeader: 'Wearing Off',
    question: 'Since taking your LAST Parkinson medication: if wearing off, how long ago.?',
    answers: ['Still Nothing', '15 Minutes Ago', '45 Minutes Ago', '1 Hour And 15 MInutes Ago', '2 Hours Ago'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 3
},
{
    survHeader: 'ACTIVITY',
    question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to do normal activities',
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
    survHeader: 'MOVEMENT',
    question: 'Since taking your LAST Parkinson medications: how much of the time have you been able to move comfortable?',
    answers: ['All Of The Time', 'Most Of The Time', 'About Half The Time', 'Less Than Half The Time', 'None Of The Time'],
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
    question: 'Right Now: do you feel off (slow, stiff, difficult to walk)?',
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
    survHeader: 'STIFFNESS',
    question: 'Right Now: how is your stiffness?',
    answers: ['No Stiffness', 'A Little Stiff', 'Quite Stiff', 'Very Stiff', 'So Stiff Can\'t Move'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 8
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
    questionNum : 9
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
    questionNum : 10

},

{
    survHeader: 'SLEEPY',
    question: 'Since taking your LAST Parkinson medication: how tired have you been?',
    answers: ['Not At All', 'Some', 'Sleepy', 'Very Sleepy', 'Exhausted All The Time'],
    color: ['green', 'blue', 'yellow', 'orange', 'red'],
    value: [0, 1, 2, 3, 4],
    className: ['survRadBtnGreen', 'survRadBtnBlue', 'survRadBtnYellow', 'survRadBtnOrange', 'survRadBtnRed'],
    selectionType: "radio",
    answered : '',
    firstQuestion : 0,
    questionNum : 11

}
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
        }else if(newQuestions.length === 0){
            this.props.handleFinishedCallback();
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

