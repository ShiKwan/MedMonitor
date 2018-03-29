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
        patientId: ""

    };
    
componentDidMount() {
    this.setState({patientId: window.location.search})
};

    render() {
        return (
            <div>
                <Container fluid>
                <HomeHeader />
                    Admin Report Page<br />
                    Patient id: {this.state.patientId}
                </Container>
            </div>
        )
    }
};

export default Admin_Report;
