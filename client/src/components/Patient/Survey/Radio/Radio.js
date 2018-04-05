import React from 'react';
import QButton from "../Button";
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

export default class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = { rSelected: '' };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
        console.log(this.state.rSelected);
    }

    handleSubmit(event) {
        // Don't perform an actual form submission
        event.preventDefault();
        console.log(this.state.rSelected);
        this.setState({
            answer : this.state.rSelected
        }, function(){
            console.log("send question survey title '" + this.props.survHeader.toLowerCase() + "' with answer : " + this.state.answer + " to answered array..");
            this.props.handleCompletedCallback(this.props.survHeader.toLowerCase(), this.state.answer);
            this.props.handleQuestionCallback()
        });
        

    }

    render() 
    {
        return(
                this.props.firstQuestion === 1 ? 
                    <Card className="patSurveyCard" body inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366'}}>
                        <CardHeader tag="h4" className="patSurveyHeader">{this.props.survHeader}</CardHeader>
                        <Card className="surveyQuestions">
                            <CardText className="surveyQandA"><h4>{this.props.question}</h4></CardText>

                            <div className="survRadGroup">
                                {this.props.answers.map( (answer, index) => {
                                    //another component
                                    return(
                                        <Container>
                                        <QButton 
                                            index = {`${index}`}
                                            answer = {`${answer}`}
                                            survHeader = {this.props.survHeader}
                                            className = {this.props.className}
                                            color = {this.props.color}
                                            onClickHandle = {this.onRadioBtnClick}
                                            active = {this.state.rSelected}
                                        >
                                        </QButton>
                                        <Label>{this.state.rSelected}</Label>
                                        </Container>
                                    )
                                })
                                }
                            </div>
                        <br>
                        </br>
                        <p className="radSelected">(Radio) You Selected: {this.state.rSelected}</p>

                        <Button className="questSubmitBtn" onClick={(e) =>this.handleSubmit(e)} color="secondary" size="lg" block><h4>Submit Your Answer</h4></Button>
                        </Card>
                    </Card>   
                :
                null
        )
    }
}