import React from 'react';
import "./Registration.css";
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container
} from 'reactstrap';


export default class Registration extends React.Component {

    render() {
        return (
            <Container>
                <Form className="form col-md-12">
                    <Container>
                        <h2 className="signInMessage">Email Address Validation</h2>
                    </Container>
                    <FormGroup row className="signInName">
                        <Label size="lg">Email address</Label>
                        <Input type="text" name="email" placeholder="Please enter your email address here.. " bsSize="lg" value={this.props.email} onChange={this.props.onChange} />
                    </FormGroup>
                    <Button className="submit-button" size="lg" color="success" onClick={this.props.validateEmail}> Validate Email</Button>{' '}
                </Form>
                <Form className="form col-md-12">
                    <Container>
                        <h2 className="RegisterMessage">Register Your Account</h2>
                    </Container>
                    <Label> We found your email address! Please create your account </Label>
                    <Label> Invalid email address, please contact the physician for more information!</Label>
                    <FormGroup row className="RegisterUserName">
                        <Label size="lg">User Name</Label>
                        <Input type="text" name="username" id="enterUser" placeholder="user name" bsSize="lg" value={this.props.username} onChange={this.props.onChange} />
                    </FormGroup>
                    <FormGroup row className="registerPassword">
                        <Label className="register-label" size="lg">Password</Label>
                        <Input type="password" name="password" placeholder="password" bsSize="lg" value={this.props.password} onChange={this.props.onChange} />
                    </FormGroup>
                    <FormGroup row className="registerPassword">
                        <Label className="register-label" size="lg">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" placeholder="password" bsSize="lg" value={this.props.confirmPassword} onChange={this.props.onChange} />
                    </FormGroup>
                    <Button className="submit-button" size="lg" color="success" onClick={this.props.onClick}> Submit</Button>{' '}
                </Form>
            </Container>

        );
    }
}
