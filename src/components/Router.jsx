import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Navbar from './Navbar.jsx';
import Contact from './Contact.jsx';
import GraphicDesign from './GraphicDesign';

function Routzer() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/graphic-design" component={GraphicDesign} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default Routzer;