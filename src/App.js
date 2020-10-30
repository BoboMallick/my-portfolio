import React from 'react';
import './App.css';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import About from './components/About/About';
import Home from './components/Home/Home';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Home></Home>
     <div>
       <Parallax 
        blur={{ min: -30, max: 30 }}
        bgImage={require("./img/img/parallex/background.webp")}
        bgImageAlt=""
        strength={-200}
       >
         <Container className="container-box rounded">
         <Fade duration={500}>
     <About></About>
     </Fade>
     </Container>
     </Parallax>
     </div>

     <div>
       <Parallax 
        blur={{ min: -30, max: 30 }}
        bgImage={require("./img/img/parallex/background.webp")}
        bgImageAlt=""
        strength={-200}
       >
         <Container className="container-box rounded">
         <Fade duration={500}>
     <Skill></Skill>
     </Fade>
     </Container>
     </Parallax>
     </div>
     <div>
       <Parallax 
        blur={{ min: -30, max: 30 }}
        bgImage={require("./img/img/parallex/background.webp")}
        bgImageAlt=""
        strength={-200}
       >
         <Container className="container-box rounded">
         <Fade duration={500}>
     <Projects></Projects>
     </Fade>
     </Container>
     </Parallax>
     </div>
    </div>
  );
}

export default App;
