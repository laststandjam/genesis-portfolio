import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Designs from "../../pages/Designs";
import DesignsShow from "../../pages/DesignsShow";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/designs" component={Designs} />
    <Route
      exact path="/designs/:id"
      render={props => <DesignsShow {...props} />}
    />
  </Switch>
);
