import React from 'react';
import "./BSNavbar.css";
import "./Container.css"
import { Container, Row } from "./Container.js";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    FormGroup,
    Form,
    Label,
    TextForm,
    FormText,
    Button,
    InputGroup,
    Col
} from 'reactstrap';

export default class NavbarR extends React.Component {
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
            <div>
                
                    <Navbar color="nav-color" light expand="md">
                    <Container>
                        <Nav pills>
                            <NavItem>
                                <NavLink href="/" className="color-home" active>HOME</NavLink>
                                <NavLink href="#" className="color-app" active>APPOINTMENT</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav pills className="ml-auto">
                            <NavItem>
                                    <Input type="password" name="password" id="examplePassword" placeholder="patients name" />
                                <NavLink href="#" className="color-logout" active>LOG OUT</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>

                    </Navbar>
                <Container>
                        <Form className="signin-form col-md-8">
                            <FormGroup row>
                                <Label size="lg">User Name</Label>
                                    <Input type="email" name="email" id="userName" placeholder="user name" bsSize="lg" />
                            </FormGroup>
                            <FormGroup row>
                                <Label size="lg">Password</Label>
                                    <Input type="email" name="email" id="userPassword" placeholder="password" bsSize="lg" />
                            </FormGroup>
                        <Button color="success">Submit</Button>{' '}
                    </Form>
                </Container>
            </div>
    );
    }
}