import React from 'react';
import QButton from "../Button";
import "./Checkbox.css";

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

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = { 
            cSelected: [],
            answered : [],
            questionNum : this.props.questionNum
         };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }
    componentDidMount(){

    }
    onCheckboxBtnClick(selected) {
        console.log("selected: " , selected)
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: this.state.cSelected });
        console.log(this.state.cSelected);
    }

    handleSubmit(event) {
        // Don't perform an actual form submission
        event.preventDefault();
        console.log(this.state.cSelected);
        this.setState({
            answer : this.state.cSelected
        }, function(){
            console.log("send question survey title '" + this.props.label.toLowerCase() + "' with answer : '" + this.state.answer + "' to answered array..");
            this.props.handleCompletedCallback(this.props.label.toLowerCase(), this.state.answer);
            this.props.handleQuestionCallback()
        });
        

    }

    render() {
        return(
                this.props.firstQuestion === 1 ? 
                <Card className="patSurveyCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }} >
                    <CardHeader tag="h4" className="patSurveyHeader">{this.props.survHeader}</CardHeader>
                    <Card className="surveyQuestions">
                    <CardText className="surveyQandA"><h4>{this.props.question}</h4></CardText>

                    <div className="survChkGroup">
                        {this.props.data_value.map((answer, index) => 
                            <Container>
                            <QButton 
                                answer={this.props.answers[index]}
                                index = {index}
                                survHeader = {this.props.survHeader}
                                className = {this.props.className}
                                color = {this.props.color}
                                onClickHandle = {this.onCheckboxBtnClick}
                                active = {this.state.cSelected}
                                data_value = {this.props.data_value}
                                selectionType = {this.props.selectionType}
                            >
                            </QButton>
                            </Container>
                        )}
                    </div>
                    <br>
                    </br>
                    {/* <p className="chkSelected">(Checkbox) You Selected: {JSON.stringify(this.state.cSelected)}</p> */}

                    <Button className="questSubmitBtn" color="secondary" onClick={(e) => this.handleSubmit(e)} size="lg" block><h4>Submit Your Answer</h4></Button>
                    </Card>
                </Card>
                : 
                null
        )
    }
}




