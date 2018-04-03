import React from 'react';
import "./Header.css";
import userAPI from "../../utils/userAPI";

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

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout = (event) => {
        userAPI.logout()
                .then(data =>{
                    console.log("user logging out...")
                    console.log(data);
                    localStorage.addItem("username", null);
                    localStorage.addItem("role", null);
                    localStorage.addItem("email", null);
                    localStorage.addItem("messageCenter", "You have successfully logged out from our application!");
                    localStorage.addItem("messageStatus", "success");
                })
    }


    render() {
        return (
                <Navbar color="navbar" light expand="md">
                    <Container>
                        <Nav pills className="navLogInPills">
                            <NavItem>
                            <NavLink href={localStorage.getItem("role") === "patient" ? "/patient" : localStorage.getItem("role") === "admin" || localStorage.getItem("role") === "doctor" ? "/admin" : "/"} className="navHomeBtn" size="lg" active>HOME</NavLink>
                            {localStorage.getItem("username") && localStorage.getItem("username") !== "null" ? <NavLink href="appointment" className="navAppBtn" size="lg" active>APPOINTMENT</NavLink> : null }
                            </NavItem>
                        </Nav>
                        <Nav pills className="navlogOutpills">
                            <NavItem className="navLogName">
                                <Label className="loginName" for="appTime"><h3><em>{localStorage.getItem("username") !== "null" ? `Hello ${localStorage.getItem("username")}!` : `Welcome!`} </em></h3></Label>
                                {localStorage.getItem("username")!== "null"?
                                <NavLink href="/home" className="logOutBtn" size="lg" onClick={this.handleLogout} active>LOG OUT</NavLink>
                                :
                                <NavLink href="/home" className="logOutBtn" size="lg" active>LOG IN</NavLink>
                                }
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
        );
    }
}