import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Blog from './components/Blog/Blog';
import Experience from './components/Experience/Experience';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/skills">
            <Skill></Skill>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/experience">
            <Experience></Experience>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
