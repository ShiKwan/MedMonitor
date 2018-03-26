import React, { Component } from "react";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";

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

import './Home.css';

class Home extends Component {
    state = {

    };
    render() {
        return (
        <Container fluid>
            <Header />
            <Container>
                <SignInForm />
            </Container>
        </Container>
        );
    }
}

export default Home;