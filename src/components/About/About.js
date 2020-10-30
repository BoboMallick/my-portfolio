import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../img/img/profile/katha.jpg';
import Button from "react-bootstrap/Button";
import './About.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    {/* profile pix */}
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} roundedCircle fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Katha Mallick</strong>
                                <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti hic architecto ut natus officiis sed aperiam et laborum nulla nihil?
                                <br />
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, officia beatae. Dolor recusandae tempora numquam consequuntur enim doloribus, ipsa temporibus fugit corrupti unde beatae saepe.
                              <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda optio quae, ex iure provident?
                            <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1IfvuUJcX5Fh9f83uH4LKj1HpNluxMLG9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/BoboMallick" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/keya-mallick-7198b91ba/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="mallickbobo@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                Email
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;