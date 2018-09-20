import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/resume" component={Resume} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
);
export default Main;
