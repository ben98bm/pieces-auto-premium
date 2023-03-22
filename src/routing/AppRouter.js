import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../components/pages/Home/Home";
import formulaire from "../components/pages/Home/formulaire";
import diagnostic from "../components/pages/Home/diagnostic";

class AppRouter extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/formulaire" component={formulaire} />
            <Route path="/diagnostic" component={diagnostic} />
            {/* <AuthenticatedRoute path="/" component={PrivateRoutes} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}
export default AppRouter;
