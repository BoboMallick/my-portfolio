import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Logo from '../../img/icons/logo.png';
import './Mynavbar.css'
import { Link } from 'react-router-dom';

const Mynavbar = () => {
    return (
      <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link className="mr-5" to="/home">Home</Link>
              <Link className="mr-5" to="/about">About</Link>
              <Link className="mr-5" to="/skills">Skills</Link>
              <Link className="mr-5" to="/experience">Experience</Link>
              <Link className="mr-5" to="/projects">Projects</Link>
              <Link className="mr-5" to="/blog">Blog</Link>
              <Link className="mr-5" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
    );
};

export default Mynavbar;