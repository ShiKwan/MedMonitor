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
                <Navbar color="nav-color" light expand="md">
                    <Container>
                        <Nav pills>
                            <NavItem>
                                <NavLink href={localStorage.getItem("role") === "patient" ? "/patient" : localStorage.getItem("role") === "admin" || localStorage.getItem("role") === "doctor" ? "/admin" : "/"  } className="color-home" active>HOME</NavLink>
                                { localStorage.getItem("username") && localStorage.getItem("username") !=="null" ? <NavLink href="appointment" className="color-app" active>APPOINTMENT</NavLink> : null }
                            </NavItem>
                        </Nav>
                        <Nav pills className="ml-auto">
                            <NavItem>
                                <Label className="loginName" for="appTime"><h4>{localStorage.getItem("username") !== "null" ? `Hello ${localStorage.getItem("username")}!` : `Welcome!`} </h4></Label>
                                {localStorage.getItem("username")!== "null"?
                                <NavLink href="/home" className="color-logout" onClick={this.handleLogout} active>LOG OUT</NavLink>
                                :
                                <NavLink href="/home" className="color-logout" active>LOG IN</NavLink>
                                }
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
        );
    }
}