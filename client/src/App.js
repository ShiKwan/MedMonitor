import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Header from "./components/Header";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sk" component={SK} />
        <Route exact path="/mh" component={MH} />
        <Route exact path="/bs" component={BS} />
        <Route exact path="/jm" component={JM} />
        <Route exact path="/episode" component={Episode} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/report" component={Admin_Report} />
        <Route exact path="/admin/episode" component={Admin_Episode} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/new_patient" component={New_Patient} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;