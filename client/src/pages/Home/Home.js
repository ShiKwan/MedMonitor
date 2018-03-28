import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
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
        return (
        <Container fluid>
            <Alert color={`${this.state.messageStatus}`} className="text-center" >{this.state.messageCenter}</Alert>
            <HomeHeader />
            <Container>
                    <SignInForm onClick={this.handleLogin} onChange={this.handleInputChange} username={this.props.username} password={this.state.password} />
            </Container>
        </Container>
        );
    }
};

export default Home;