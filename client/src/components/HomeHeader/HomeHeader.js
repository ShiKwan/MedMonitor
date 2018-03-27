import React from 'react';
import "./HomeHeader.css";

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
                <Navbar className="HomeHeader" color="nav-color" light expand="md">
                    <Container>
                        <h1 className="logo">LOGO</h1>
                    </Container>
                </Navbar>
        );
    }
}