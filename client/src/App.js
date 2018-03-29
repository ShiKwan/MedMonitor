import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SK from "./pages/SK";
import MH from "./pages/MH";
import BS from "./pages/BS";
import JM from "./pages/JM";
import Appointment from "./pages/Appointment";
import Episode from "./pages/Episode";
import New_Patient from "./pages/New_Patient";
import Patient from "./pages/Patient";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Admin_Report from "./pages/Admin_Report";
import Admin_Episode from "./pages/Admin_Episode";
import userAPI from "./utils/userAPI";
import {Alert } from 'reactstrap';

const PrivatePatientRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      console.log(localStorage.getItem("role")),
      localStorage.getItem("role").toLowerCase()==="patient"
      ? (
        localStorage.removeItem("messageCenter"),
        localStorage.removeItem("messageStatus"),
        <Component {...props} />
        )
      : (
        localStorage.setItem("messageCenter", "You do not have the proper credential to access that page."),
        localStorage.setItem("messageStatus", "danger"),
        <Redirect to={{
          pathname: '/notfound'
        }} />
        )
  )} />
)
const PrivateAdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("role").toLowerCase() === "admin"
      ? <Component {...props} />
      : (
        localStorage.setItem("messageCenter", "You do not have the proper credential to access that page."),
        localStorage.setItem("messageStatus", "danger"),
          <Redirect to={{
          pathname: '/notfound'
          }} />
        )
  )} />
)
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      role: "",
      email: "",
      messageCenter: "",
      messageStatus: ""
    }
    this.getBackMessage = this.getBackMessage.bind(this)
    this.getBackMessageStatus = this.getBackMessageStatus.bind(this)

  }
  getBackMessage(messageCenter){
    console.log("here getting back message")
    this.setState({
      messageCenter : messageCenter
    })
  }

  getBackMessageStatus(messageStatus){
    this.setState({
      messageStatus : messageStatus
    })
  }
  
  componentDidMount(){
    userAPI.isLoggedIn().then( res => {
      console.log(res);
      if(res.user){
        localStorage.setItem("username", res.user.username);
        localStorage.setItem("role", res.user.role);
        localStorage.setItem("email", res.user.email);
        this.setState({
          username: res.user.username, 
          role: res.user.role,
          email: res.user.email});
      }
      console.log(this.state);
    })
    .catch(err => {
      console.log(err.response);
      localStorage.setItem("username", null);
      localStorage.setItem("role", null);
      localStorage.setItem("email", null);
      this.setState({
        username: "",
        role: "",
        email : "",
        messageCenter : "",
        messageStatus : "",
      })
    })
  }
  
  render(){
  return(
  <Router>
    <div>
        {localStorage.getItem("messageCenter") ? <Alert color={this.state.messageStatus} className="text-center">{this.state.messageCenter}</Alert> : null }
      <Switch>
          <Route exact path="/" render={props => <Home getBackMessage={this.getBackMessage} getBackMessageStatus={this.getBackMessageStatus}> </Home>} />
          <Route exact path="/home" render={props => <Home getBackMessage={this.getBackMessage} getBackMessageStatus={this.getBackMessageStatus}> </Home>} />
        <Route exact path="/sk" component={SK} />
        <Route exact path="/mh" component={MH} />
        <Route exact path="/bs" component={BS} />
        <Route exact path="/jm" component={JM} />
        <PrivateAdminRoute exact path="/episode" component={Episode} />        
        <PrivatePatientRoute exact path="/patient" component={Patient} />
        <PrivateAdminRoute exact path="/admin" component={Admin} />
        <PrivateAdminRoute exact path="/admin/report" component={Admin_Report} />
        <PrivateAdminRoute exact path="/admin/episode" component={Admin_Episode} />
        <PrivatePatientRoute exact path="/appointment" component={Appointment} />
        <PrivateAdminRoute exact path="/new_patient" component={New_Patient} />
        <Route exact path="/notfound" component={NoMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  )
  }
}

export default App;