import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import About from "../components/about/About";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/about" />} />
      <Route path="/about" component={About} />
      {/* <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={Signout} /> */}
    </div>
  );
}
