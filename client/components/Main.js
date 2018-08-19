import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Main;
