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

class Admin_Report extends Component {
    state = {

    };
    render() {
        return (
            <div>
                <Container fluid>
                <HomeHeader />
                Admin Report Page
                </Container>
            </div>
        )
    }
}

export default Admin_Report;
