import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";
import {Container, Alert} from 'reactstrap';
import userAPI from '../../utils/userAPI';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {    
            password : "",
            messageCenter : null,
            messageStatus : "",
            username : this.props.username,
            role : this.props.role,
            email : this.props.email
        }
    }

    handleLogin = event => {
        console.log("here");
        if (this.state.password && this.state.username) {
            userAPI.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res);
                
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("messageCenter", "Login successfully!");
                localStorage.setItem("messageStatus", "success");
                this.setState({
                    role: res.data.role,
                    email: res.data.email,
                    username: res.data.username,
                    messageCenter: "Login successfully!",
                    messageStatus: "success"
                })
                console.log("here after setting state")
                this.props.getBackMessage(this.state.messageCenter);
                this.props.getBackMessageStatus(this.state.messageStatus);
                console.log("username : ", this.state.username);
                console.log("local storage: ", localStorage.getItem("username"));
                console.log("going to redirect");
                if(localStorage.getItem("role").toLowerCase()==="patient"){
                    console.log("to patient");
                    this.props.history.push('/patient');      
                } else if (localStorage.getItem("role").toLowerCase() === "admin") {
                    this.props.history.push('/admin');   
                }
                
            })
            .catch(err => {
                console.log("fail");
                console.log("setting redirect to true");
                console.log(err)
                
                this.setState({
                    messageCenter: "Invalid username or password",
                    messageStatus: "danger"
                });
                localStorage.setItem("messageCenter", "Invalid username or password");
                localStorage.setItem("messageStatus", "danger");
                this.props.getBackMessage(this.state.messageCenter);
                this.props.getBackMessageStatus(this.state.messageStatus);
                
            }
            );
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log([name] + ", " + event.target.value);
    };
    render() {
        let sendBackMessage = this.props.getBackMessage;
        let getBackMessageStatus = this.props.getBackMessageStatus;
        
        return (
        <Container fluid>
            {/*<Alert color={`${this.state.messageStatus}`} className="text-center" >{this.state.messageCenter}</Alert>*/}
            <Header />
            <Container>
                    <SignInForm onClick={this.handleLogin} onChange={this.handleInputChange} username={this.props.username} password={this.state.password} />
            </Container>
        </Container>
        );
    }
};

export default withRouter(Home);