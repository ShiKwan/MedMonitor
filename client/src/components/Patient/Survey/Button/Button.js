import React from 'react';
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

export default class QButton extends React.Component {
    render() {   
        return(
            <Button
                id={this.props.survHeader}
                className={`${this.props.className[this.props.index]} survChkBtn`}
                color={this.props.color[this.props.index]}
                onClick={() => this.props.onClickHandle(this.props.answer)}
                value={this.props.answer}
                active = {this.props.active === this.props.answer}
            >
                <h4>{this.props.answer}</h4>
            </Button>
        )
    }
}