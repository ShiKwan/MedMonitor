import React, { Component } from "react";
import HomeHeader from "../../components/HomeHeader";
import SignInForm from "../../components/SignInForm";

import {
    Container
} from 'reactstrap';

import './Home.css';

class Home extends Component {
    state = {

    };
    render() {
        return (
        <Container fluid>
            <HomeHeader />
            <Container>
                <SignInForm />
            </Container>
        </Container>
        );
    }
}

export default Home;