import React from 'react';
import "./SignInForm.css";

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

export default class SignInForm extends React.Component {

    render() {
        return (
            
                <Container>
                    <Form className="signin-form col-md-8">
                        <Container>
                            <h2 className="signInMessage">Sign In With Us</h2>
                        </Container>
                        <FormGroup row className="signInName">
                            <Label size="lg">User Name</Label>
                            <Input type="text" name="enterUser" id="enterUser" placeholder="user name" bsSize="lg" />
                        </FormGroup>
                        <FormGroup row className="signInPword">
                            <Label className="signin-label" size="lg">Password</Label>
                            <Input type="password" name="userPassword" id="userPassword" placeholder="password" bsSize="lg" />
                        </FormGroup>
                        <Button className="submit-button" color="success">Submit</Button>{' '}
                    </Form>
                </Container>
           
        );
    }
}