import React from 'react';
import ReactDOM from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";
import About from "./About";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
    return    <Router>
         <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/navbar">
              <Navbar/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </Router>
};

export default App
