import React, { Component } from "react";
import Header from "../../components/Header";
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
        patientId: ""

    };
    
componentDidMount() {
    this.setState({patientId: window.location.search})
};

    render() {
        return (
            <div>
                <Container fluid>
                <Header />
                    Admin Episode Page<br />
                    Patient id: {this.state.patientId}
                </Container>
            </div>
        )
    }
};

export default Admin_Episode;
