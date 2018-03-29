import React from 'react';
import "./Header.css";

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


    render() {
        return (
                <Navbar color="nav-color" light expand="md">
                    <Container>
                        <Nav pills>
                            <NavItem>
                                <NavLink href="/" className="color-home" active>HOME</NavLink>
                                <NavLink href="appointment" className="color-app" active>APPOINTMENT</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav pills className="ml-auto">
                            <NavItem>
                                <Label className="loginName" for="appTime"><h4>Hello: Jon Doe</h4></Label>
                                <NavLink href="#" className="color-logout" active>LOG OUT</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
        );
    }
}