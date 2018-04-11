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

import "./Footer.css";


export default class Header extends React.Component {
    render(){
        return(
            <Container className="footer" fluid>
                <Label className="copyright">
                    Copyright &copy; {moment().format("YYYY")} All right reserved. 
                </Label>
                <Label className="footAbout">
                    <Link to="/About_Us" >About Us</Link>
                </Label>
                <Label className="footGit">
                    <Link to="https://github.com/ShiKwan/project3">Git Hub</Link>
                </Label>
            </Container>
        )
    }
}