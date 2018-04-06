import React from 'react';
import "./Button.css";

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
//radio = onClickHandle(this.props.data_value) and checkbox =  onClickHandle(this.props.answer)
export default class QButton extends React.Component {
    render() {   
        return(
            <Container className="survBtn">

                <Button
                    id={this.props.survHeader}
                    className={`${this.props.className[this.props.index]} survChkBtn`}
                    color={this.props.color[this.props.index]}
                    onClick={() => this.props.onClickHandle(this.props.selectionType === "checkbox" ? this.props.answer : this.props.data_value)}
                    value={this.props.data_value}
                    active = {this.props.active === this.props.answer}
                    data_value = {this.props.data_value}
                >
                    <h4>{this.props.answer}</h4>
                </Button>

            </Container>
        )
    }
}