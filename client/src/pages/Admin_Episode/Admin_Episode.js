import React, { Component } from "react";
import HomeHeader from "../../components/HomeHeader";
import '../Admin/Admin.css';
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

class Admin_Episode extends Component {
    state = {

    };
    render() {
        return (
            <div>
                <Container fluid>
                <HomeHeader />
                    Admin Episode Page
                </Container>
            </div>
        )
    }
}

export default Admin_Episode;
