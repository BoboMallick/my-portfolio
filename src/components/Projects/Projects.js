import React from 'react';
import './Projects.css';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// projects
import Pro1 from "../../img/img/projects/pro1.png";
import Pro2 from "../../img/img/projects/pro2.png";
import Pro3 from "../../img/img/projects/pro3.png";
import Pro4 from "../../img/img/projects/pro4.png";

// skills
import L_REACT from "../../img/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../img/img/skills/nodejs.svg";
import L_EXPRESS from "../../img/img/skills/express.svg";

import L_MONGODB from "../../img/img/skills/mongodb.svg";
import L_HTML5 from "../../img/img/skills/html-5.svg";
import L_CSS3 from "../../img/img/skills/css3.svg";
import L_GIT from "../../img/img/skills/github.svg";
import L_MATERIALUI from "../../img/img/skills/material-ui-1.svg";
import Mynavbar from '../Navbar/Mynavbar';




const Projects = () => {
    return (
        <div id="projects">
          <Mynavbar></Mynavbar>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                      {/* Project:Creative Agency */}
        <ImageEvent
            date="18/10/2020"
            className="text-center"
            text="Creative Agency"
            src={Pro1}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Creative Agency is a simple single-page web application. If you want to check order and review, also admin can add service if he/she wants.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://infallible-tereshkova-0aa433.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/BoboMallick/creative-agency.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: Volunteer Network */}
          <ImageEvent
            date="05/10/2020"
            className="text-center"
            text="Volunteer Network"
            src={Pro2}
            alt="MERN Tip Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Volunteer Network is a simple single-page web application. It is a charity foundation website. User can choose any event and register as a volunteer. Use can see registered activity and also delete the activity
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://suspicious-villani-8c3b47.netlify.app"
                  target="_blank"
                >
                 SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/BoboMallick/volunteer-network.git"
                  target="_blank"
                >
                  SOURCE CODE               
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Travel Guru */}
          <ImageEvent
            date="22/09/2020"
            className="text-center"
            text="Travel Guru"
            src={Pro3}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Travel Guru is a simple single-page web application. This website helps the customers to choose a travel place. User can see some hotels of the selected location on google map.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://suspicious-mcclintock-f836ef.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/BoboMallick/react-travel-guru.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Login Page */}
          <ImageEvent
            date="13/09/2020"
            className="text-center"
            text="Login Page"
            src={Pro4}
            alt="Smart Brain Face Detect"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> It is simple Login page
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          
                        </ul>
                        <hr />
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://determined-galileo-cc27ab.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/BoboMallick/firebase-login-system1.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default Projects;