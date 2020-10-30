import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from "styled-components";
// import Logo from '../../img/icons/logo.png'


const MyTitleMessage = styled.h1
`position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;


const MyTitle = () => {
    return (
        <MyTitleMessage>
        <div className="titleMessage">
          <div className="heading">
          {/* <div>
               <img src={Logo} alt=""/>
               </div> */}
            <div className="main text-center mb-3">
              Hola, I am
              <br />
              <span>
                <strong>Katha Mallick</strong>
              </span>
            </div>
            <div className="sub">
              <Typewriter
                options={{
                  strings: ["Fronend Web Developer", "Learner"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </div>
          </div>
        </div>
      </MyTitleMessage>
    );
};

export default MyTitle;