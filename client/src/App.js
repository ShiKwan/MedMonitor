import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import SK from "./pages/SK";
import MH from "./pages/MH";
import BM from "./pages/BM";
import JM from "./pages/JM";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/sk" component={SK} />
        <Route exact path="/mh" component={MH} />
        <Route exact path="/bm" component={BM} />
        <Route exact path="/jm" component={JM} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
