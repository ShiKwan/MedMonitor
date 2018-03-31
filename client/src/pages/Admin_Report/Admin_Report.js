import React, { Component } from "react";
// import Header from "../../components/Header";
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
    this.setState({patientId: window.location.search});
    console.log("patientId: " + this.state.patientId)
};

    render() {
        return (
            <div>
                <Container fluid>
                {/* <Header /> */}
                    Admin Report Page<br />
                    Patient id: {this.state.patientId}
                </Container>
            </div>
        )
    }
};

export default Admin_Report;
