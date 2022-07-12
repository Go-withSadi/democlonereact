import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMyDetails from "./component/AboutMyDetails/AboutMyDetails";
import AllBlog from "./Component/AllBlog/AllBlog";
import AllProject from "./Component/AllProject/AllProject";
import ContackUs from "./Component/ContackUs/ContackUs";
import Home from "./Component/Home/Home";
import Resume from "./Component/Home/Resume/Resume";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/all-project">
          <AllProject></AllProject>
        </Route>

        <Route path="/all-blog">
          <AllBlog></AllBlog>
        </Route>

        <Route path="/about-me">
          <AboutMyDetails></AboutMyDetails>
        </Route>

        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>

        <Route path="/resume">
          <Resume></Resume>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
