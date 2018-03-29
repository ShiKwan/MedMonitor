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
        <Container fluid className="patSurvey">
                
                    <Card className="introSuvCard" fluid body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                        <CardHeader tag="h2" className="introSuvCardHeader">PLEASE TAKE THIS SHORT SURVEY</CardHeader>
                    </Card>
                
                <Card className="patSurveyCard" body fluid inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                <CardHeader tag="h3"  className="patSurveyHeader">INCIDENCES</CardHeader>
                <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Since taking your LAST medications have you had any:</h3></CardText>
                        
                        <div className="suvChkGroup">
                            <Button className="suvChkBtn" color="danger" onClick={() => this.onCheckboxBtnClick('Falls')} active={this.state.cSelected.includes('Falls')}><h3>Falls</h3></Button>{' '}<br></br>
                            <Button className="suvChkBtn" color="danger" onClick={() => this.onCheckboxBtnClick('Choking On Food')} active={this.state.cSelected.includes('Choking On Food')}><h3>Choking On Food</h3></Button>{' '}<br></br>
                            <Button className="suvChkBtn" color="danger" onClick={() => this.onCheckboxBtnClick('Hallucinations')} active={this.state.cSelected.includes('Hallucinations')}><h3>Hallucinations</h3></Button>{' '}<br></br>
                            <Button className="suvChkBtn" color="success" onClick={() => this.onCheckboxBtnClick('None Of These')} active={this.state.cSelected.includes('None Of These')}><h3>None Of These</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="chkSelected">You Selected: {JSON.stringify(this.state.cSelected)}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                </Card>
            </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">ACTIVITY</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Since taking your LAST medications:
                            <br></br>how much of the time have you felt able to do your normal activities</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('All Of The Time')} active={this.state.rSelected === 'All Of The Time'}><h3>All Of The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('Most Of The Time')} active={this.state.rSelected === 'Most Of The Time'}><h3>Most Of The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('About Half The Time')} active={this.state.rSelected === 'About Half The Time'}><h3>About Half The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Less Than Half The Time')} active={this.state.rSelected === 'Less Than Half The Time'}><h3>Less Than Half The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick('None Of The Time')} active={this.state.rSelected === 'None Of The Time'}><h3>None Of The Time</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">MOVEMENT</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Since taking your LAST medications: 
                            <br></br>how much of the time have you been able to move normally?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('All Of The Time')} active={this.state.rSelected === 'All Of The Time'}><h3>All Of The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('Most Of The Time')} active={this.state.rSelected === 'Most Of The Time'}><h3>Most Of The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('About Half The Time')} active={this.state.rSelected === 'About Half The Time'}><h3>About Half The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Less Than Half The Time')} active={this.state.rSelected === 'Less Than Half The Time'}><h3>Less Than Half The Time</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick('None Of The Time')} active={this.state.rSelected === 'None Of The Time'}><h3>None Of The Time</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">OFF TIME</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your movement?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('Normal')} active={this.state.rSelected === 'Normal'}><h3>Normal</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('A Little Slow')} active={this.state.rSelected === 'A Little Slow'}><h3>A Little Slow</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Slow')} active={this.state.rSelected === 'Slow'}><h3>Slow</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Very Slow')} active={this.state.rSelected === 'Very Slow'}><h3>Very Slow</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("Can't Move At All")} active={this.state.rSelected === "Can't Move At All"}><h3>Can't Move At All</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">TREMORS</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your tremor?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('No Tremor')} active={this.state.rSelected === 'No Tremor'}><h3>No Tremor</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('Bothering Me A Little')} active={this.state.rSelected === 'Bothering Me A Little'}><h3>Bothering Me A Little</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Worse Than Normal')} active={this.state.rSelected === 'Worse Than Normal'}><h3>Worse Than Normal</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Quite Bad')} active={this.state.rSelected === 'Quite Bad'}><h3>Quite Bad</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("Very Bad, Can't Do Normal Tasks")} active={this.state.rSelected === "Very Bad, Can't Do Normal Tasks"}><h3>Very Bad, I Can't Do Normal Tasks</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">STIFFNESS</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your stiffness?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('No Stiffness')} active={this.state.rSelected === 'No Stiffness'}><h3>No Stiffness</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('A Little Stiff')} active={this.state.rSelected === 'A Little Stiff'}><h3>A Little Stiff</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Quite Stiff')} active={this.state.rSelected === 'Quite Stiff'}><h3>Quite Stiff</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Very Stiff')} active={this.state.rSelected === 'Very Stiff'}><h3>Very Stiff</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("So Stiff Can't Move")} active={this.state.rSelected === "So Stiff Can't Move"}><h3>So Stiff Can't Move</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">WALKING</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your walking?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('Good')} active={this.state.rSelected === 'Good'}><h3>Good</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('A Little Slow')} active={this.state.rSelected === 'A Little Slow'}><h3>A Little Slow</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Slower Than Normal')} active={this.state.rSelected === 'Slower Than Normal'}><h3>Slower Than Normal</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Very Slow, Shuffling')} active={this.state.rSelected === 'Very Slow, Shuffling'}><h3>Very Slow, Shuffling</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("Can't Walk At All")} active={this.state.rSelected === "Can't Walk At All"}><h3>Can't Walk At All</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">BALANCE</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your balance when you stand or walk?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('Good')} active={this.state.rSelected === 'Good'}><h3>Good</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('A Little Unsteady')} active={this.state.rSelected === 'A Little Unsteady'}><h3>A Little Unsteady</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Unsteady')} active={this.state.rSelected === 'Unsteady'}><h3>Unsteady</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Very Unsteady, Worry About Falling')} active={this.state.rSelected === 'Very Unsteady, Worry About Falling'}><h3>Very Unsteady, Worry About Falling</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("Too Unsteady To Stand Or Walk")} active={this.state.rSelected === "Too Unsteady To Stand Or Walk"}><h3>Too Unsteady To Stand Or Walk</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                    <CardHeader tag="h3" className="patSurveyHeader">SPEACH</CardHeader>
                    <Card className="surveyQuestions">
                        <CardText className="surveyQandA"><h3>Right Now: how is your speach?</h3></CardText>

                        <div className="suvRadGroup">
                            <Button className="suvRadBtn" color="success" onClick={() => this.onRadioBtnClick('Good')} active={this.state.rSelected === 'Good'}><h3>Good</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="info" onClick={() => this.onRadioBtnClick('A Little Slow')} active={this.state.rSelected === 'A Little Slow'}><h3>A Little Slow</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="warning" onClick={() => this.onRadioBtnClick('Slow, Stuttering')} active={this.state.rSelected === 'Slow, Stuttering'}><h3>Slow, Stuttering</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtnOrange" color="orange" onClick={() => this.onRadioBtnClick('Difficulty Starting Words')} active={this.state.rSelected === 'Difficulty Starting Words'}><h3>Difficulty Starting Words</h3></Button>{' '}<br></br>
                            <Button className="suvRadBtn" color="danger" onClick={() => this.onRadioBtnClick("Can't Initiate Speach")} active={this.state.rSelected === "Can't Initiate Speach"}><h3>Can't Initiate Speach</h3></Button>{' '}
                        </div>
                        <br>
                        </br>
                        <p className="radSelected">You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" color="secondary" size="lg" block><h3>Submit Your Answer</h3></Button>
                    </Card>
                </Card>






        </Container>

        
        );
    }
}

export default PatSurvey;


/* <Container className="patSurvey">
    <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
        <CardHeader tag="h3" className="patSurveyHeader">How Are You Feeling</CardHeader>
        <Card className="surveyQuestions">
            <CardText className="surveyQandA"><h3>This is going to be a survey question?</h3></CardText>
            <h5>Choose one of the following</h5>
            <div className="suvRadGroup">
                <Button className="suvRadBtn" color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}><h3>One</h3></Button>{' '}
                <Button className="suvRadBtn" color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}><h3>Two</h3></Button>{' '}
                <Button className="suvRadBtn" color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}><h3>Three</h3></Button>{' '}
            </div>
            <br>
            </br>
            <p className="radSelected">You Selected: {this.state.rSelected}</p>

            <br>
            </br>

            <h5>Choose one of the following</h5>
            <div className="suvChkGroup">
                <Button className="suvChkBtn" color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}><h3>One</h3></Button>{' '}
                <Button className="suvChkBtn" color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}><h3>Two</h3></Button>{' '}
                <Button className="suvChkBtn" color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}><h3>Three</h3></Button>{' '}
            </div>
            <br>
            </br>
            <p className="chkSelected">You Selected: {JSON.stringify(this.state.cSelected)}</p>

            <Button className="questSubmitBtn" color="info" size="lg" block><h3>Submit Your Answer</h3></Button>
        </Card>
    </Card>
</Container> */
