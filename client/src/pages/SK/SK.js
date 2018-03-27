import React, { Component } from "react";
import API from "../../utils/API";
import medicationAPI from "../../utils/medicationAPI";
import userAPI from "../../utils/userAPI";
import nodeMailerAPI from "../../utils/nodemailerAPI";
import { Link } from "react-router-dom";
import {} from "reactstrap";
import Carousel from "../../components/Carousel";
import { Redirect } from 'react-router'
import {Google} from 'react-oauth2';
import reactMoment from "react-moment";
import moment from "moment";
import {GoogleLogin } from 'react-google-login';

import { GOOGLE_API_KEY, CALENDAR_ID, CLIENT_ID, CLIENT_SECRET } from "../../config/config.js";
import { Alert, Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container, Navbar} from 'reactstrap';
let client_ID = { CLIENT_ID };
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
let SCOPES = "https://www.googleapis.com/auth/calendar";
let GoogleAuth;

class SK extends Component {
  state = {
    drugName : "",
    drugType : "",
    dosage : "",
    role : "visitor",
    username: "",
    password: "",
    loginUsername: "",
    loginPassword: "",
    redirect : false,
    messageCenter : "",
    messageStatus : "",
    contactEmail: "",
    contactName : "",
    contactMessage : "",
    id : "",
    name : "",
    email : "", 
    gender : "",

  };
responseGoogle = (response) => {
    console.log(response);
    this.setState({
        googleId : response.googleId,
        accessToken : response.tokenObj.access_token,
        tokenId : response.tokenId
    })
}
  google = (err, res) =>{
      if(!err){
          console.log(res);
      }else{
          console.log(err);
      }
  };

  componentDidMount() {
    //this.loadBooks();
  };

  handleNewDrug  = event => {
      event.preventDefault();
      if(this.state.drugName && this.state.drugType && this.state.dosage){
        medicationAPI.newDrug({
          name : this.state.drugName,
          type : this.state.drugType,
          dose : this.state.dosage
      })
        .then(res => {
            console.log("success!");
            console.log(res);
        })
         .catch(err =>{ 

            console.log(err);}); 
      }
  };


  handleCreatePatient = event => {
      event.preventDefault();
      if(this.state.password && this.state.username){
        userAPI.createAccount({
            username : this.state.username,
            password : this.state.password,
            email : "test@gmail.com",
            role : "Patient"
        })
        .then(res => {
            console.log(res);
            this.setState({
                messageCenter : "Account created successfully!",
                messageStatus: "success"
            })
        })
        .catch(err => {
            console.log("fail");
            console.log("setting redirect to true");
            console.log(err)
            this.setState({ 
                messageCenter : "Invalid input field, please change the field accordingly",
                messageStatus : "danger"
            });  
        });
      }
  }
  handleLogout = event => {
    userAPI.logout()
    .then(res =>{
        console.log(res);
        this.setState({
            messageCenter: "Logout successfully!",
            messageStatus: "success",
            role : "visitor"
        });
        localStorage.removeItem("username");
        localStorage.removeItem("email")
        localStorage.removeItem("role");
    })
  }
  
  handleLogin = event => {
      event.preventDefault();
      if(this.state.loginPassword &&  this.state.loginUsername){
          userAPI.login({
              username : this.state.loginUsername,
              password : this.state.loginPassword
          })
          .then(res => {
              console.log(res);
              this.setState({
                  messageCenter: "Login successfully!",
                  messageStatus: "success"
              });  
              localStorage.setItem("username", res.data.username);
              localStorage.setItem("email", res.data.email);
              localStorage.setItem("role", res.data.role);
              this.setState({
                  role : res.data.role
              })
          })
          .catch(err => {
              console.log("fail");
              console.log("setting redirect to true");
              console.log(err.response)
              this.setState({
                  messageCenter: "Login failed!",
                  messageStatus: "danger"
              });  
            }
            );
      }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  handleEmail = event => {
      event.preventDefault();
      nodeMailerAPI.sendMail({
          name : this.state.contactName,
          email : this.state.contactEmail,
          message : this.state.contactMessage
      })
      .then(res =>{
          console.log(res);
          console.log("mail man work real hard!");
      })
      .catch(err => {
          console.log(err);
      })
  }

  render() {


    return (
      <Container>
        {this.state.messageCenter ? 
            <Alert color={this.state.messageStatus} className='text-center'>{this.state.messageCenter} </Alert> 
        : 
            null 
        }
        <Container>
            <label><h1>Google Authentication:</h1></label>
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        </Container>
        <Container>
        <label><h1>Node Mailer</h1></label>
            <Form>
                <FormGroup>
                    <Label>Contact Name</Label>
                    <Input type="text" name="contactName" placeholder="Name" onChange={this.handleInputChange} value={this.state.contactName} />
                </FormGroup>
                <FormGroup>
                    <Label>Email Address: </Label>
                        <Input type="text" name="contactEmail" placeholder="Email" onChange={this.handleInputChange} value={this.state.contactEmail} />
                </FormGroup>
                <FormGroup>
                    <Label>Message: </Label>
                    <Input type="text" name="contactMessage" placeholder="Message.. " onChange={this.handleInputChange} value={this.state.contactMessage} />
                </FormGroup>
                <Button onClick={this.handleEmail}>Submit Message</Button>
            </Form>
        </Container>

        <Container>
            <Label><h1>Register:</h1></Label>
                <br />March-24-18
                <br /> 👨🏽‍💻 Notes from SK:<br />
                <label>Temporarily it is requesting only user name and password, there will be validation that needed to happen here. <br />
                    I hardcoded email address and role temporarily before sending the data to POST route, cuz im lazy. 🙄 </label>

            <Form>
                <FormGroup>
                    <Label>UserName</Label>
                    <Input type="text" name="username" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="text" name="password" placeholder="password" onChange={this.handleInputChange} value={this.state.password} />
                </FormGroup>            
                <Button onClick={this.handleCreatePatient}>Create Account</Button>
            </Form>
        </Container>
        <hr />
        {this.state.role == "visitor" ? 
            <Container>
                    < Label ><h1> Login :</h1></Label>
                    <br />March-24-18
                    <br /> 👨🏽‍💻 Notes from SK:  <br />
                    <label>
                        This part is slightly tricky, I am still trying to figure out the best way to error handle invalid return from res. <br />
                        If user login successfully, we change the role state to "patient/admin" accordingly,<br/>
                        then login container will get replaced by a single logout button, but... <br />
                        when there is an error.., open up element inspector, and you will see an UnAuthorized Error.. 😕 <br />
                        but I manage to use setState to throw an Alert message
                    </label>

                <Form>
                    <FormGroup>
                        <Label>UserName</Label>
                        <Input type="text" name="loginUsername" placeholder="username" onChange={this.handleInputChange} value= {this.state.loginUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="text" name="loginPassword" placeholder="password" onChange={this.handleInputChange} value={this.state.loginPassword} />
                    </FormGroup>            
                    <Button onClick={this.handleLogin}>Login</Button>
                </Form>
            </Container>
        :
            <Container>
                    <Button onClick={this.handleLogout}>Logout</Button>
            </Container>
        }
            <hr />
        Add new med: 
        <Form>
            <FormGroup>
                <Label >Drug name: </Label>
                <Input type="text" name="drugName" placeholder="drug name" onChange={this.handleInputChange} value={this.state.drugName}  />
            </FormGroup>
            <FormGroup>
                <Label> Drug Type: </Label>
                <Input type="text" name="drugType" placeholder="drug type" onChange={this.handleInputChange}  value={this.state.drugType} />
            </FormGroup>
            <FormGroup>
                <Label>Dosage: </Label>
                <Input type="text" name="dosage" placeholder="dosage" onChange={this.handleInputChange} value={this.state.dosage} />
            </FormGroup>
            <Button onClick={this.handleNewDrug}>Submit</Button>
        </Form>

      </Container>
    );
  }
}

export default SK;
