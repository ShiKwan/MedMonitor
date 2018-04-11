import React from 'react';
import moment from 'moment';
import {Link } from "react-router-dom";
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Label,
    Container
} from 'reactstrap';


export default class Header extends React.Component {
    render(){
        return(
            <Container style={{ position: 'fixed', bottom: 0, backgroundColor: '#f2e1a6', borderTop: '8px solid #2d5366' }}>
                <Label>
                    Copyright &copy; {moment().format("YYYY")} All right reserved. 
                </Label>
                <Label>
                    <Link to="/About_Us" >About Us</Link>
                </Label>
            </Container>
        )
    }
}