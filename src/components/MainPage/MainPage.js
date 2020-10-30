import React from 'react';
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import About from './components/About/About';
import Home from './components/Home/Home';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

const MainPage = () => {
    return (
        <div>
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

     <div>
       <Parallax 
        blur={{ min: -30, max: 30 }}
        bgImage={require("./img/img/parallex/background.webp")}
        bgImageAlt=""
        strength={-200}
       >
         <Container className="container-box rounded">
         <Fade duration={500}>
     <ContactMe></ContactMe>
     </Fade>
     </Container>
     </Parallax>
     </div>
    </div>
        </div>
    );
};

export default MainPage;