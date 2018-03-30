import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";
import Registration from "../../components/Registration";
import { Container, Alert, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import userAPI from '../../utils/userAPI';

import classnames from 'classnames';

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
            email : this.props.email,
            patientID : "",
            newAccountEmail : "",
            activeTab: '1'
        }
        this.toggle = this.toggle.bind(this);
        
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    getBackEmail(newAccountEmail, patientID){
        console.log("here getting back message")
        this.setState({
        newAccountEmail : newAccountEmail,
        patientID : patientID
        })
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
                this.props.getBackMessage(this.state.messageCenter);
                this.props.getBackMessageStatus(this.state.messageStatus);
                console.log("username : ", this.state.username);
                console.log("local storage: ", localStorage.getItem("username"));
                if(localStorage.getItem("role").toLowerCase()==="patient"){
                    this.props.history.push('/patient');      
                } else if (localStorage.getItem("role").toLowerCase() === "admin" || localStorage.getItem("role").toLowerCase() === "doctor") {
                    this.props.history.push('/admin');   
                }
                
            })
            .catch(err => {
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
    getBackRegisterMessage = messageCenter => {
        console.log("here getting back message")
        this.setState({
        messageCenter : messageCenter
        })
        this.props.getBackMessage(this.state.messageCenter);
        
    }

    getBackRegisterMessageStatus = messageStatus => {
        this.setState({
        messageStatus : messageStatus
        })
        console.log("state right now : ", this.state);
        this.props.getBackMessageStatus(this.state.messageStatus);
    }
    

    render() {
        let sendBackMessage = this.props.getBackMessage;
        let getBackMessageStatus = this.props.getBackMessageStatus;
        
        return (
        <Container fluid >
            {/*<Alert color={`${this.state.messageStatus}`} className="text-center" >{this.state.messageCenter}</Alert>*/}
            <Header />
                <Container className="home-container">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Sign In
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Registration
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <SignInForm onClick={this.handleLogin} onChange={this.handleInputChange} username={this.props.username} password={this.state.password} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                   <Registration onCreateAccount={this.handleCreateAccount} getBackMessage={this.getBackRegisterMessage} getBackMessageStatus={this.getBackRegisterMessageStatus} onValidateEmail={this.handleValidateEmail} onChange={this.handleInputChange} newAccountEmail={this.state.newAccountEmail} newUsername = {this.state.newUsername} newUserPassword= {this.state.newUserPassword}  />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                    
            </Container>
        </Container>
        );
    }
};

export default withRouter(Home);