import React from "react";
import styled from "styled-components";

const Welcome = ({currentuser}) => {

    

  return (
    <WelcomeContainer>
      <div className="character">
        <div className="ball">
          <div className="char">
            <div className="inner">
              <div className="button"></div>
            </div>
            <div className="top"></div>
            <div className="head">
              <div className="eye"></div>
              <div className="eye">
                <div className="monicle"></div>
              </div>
            </div>
          </div>
        </div>
      { currentuser && <b>Welcome <span> {currentuser.username} </span></b>
      }
      </div>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .character{ 
    position: absolute;
  }


  .char {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    width: inherit;
    border-radius: 50%;
    transform: rotate(5deg);
    -webkit-animation: move 5s linear forwards;
    -webkit-animation-delay: 1.5s;
  }
  @-webkit-keyframes move {
    0% {
      transform: rotate(5deg);
    }
    10% {
      transform: rotate(-2deg);
    }
    15% {
      transform: rotate(1deg);
    }
    17%,
    100% {
      transform: rotate(0);
    }
  }
  .ball {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 200px;
    border-radius: 50%;
    -webkit-animation: fadein 1.5s linear forwards;
  }
  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
      box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0);
      background: rgba(0, 0, 0, 0);
    }
    40% {
      opacity: 1;
      box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0);
      background: rgba(0, 0, 0, 0);
    }
    80% {
      box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.6);
    }
    100% {
      box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.6);
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    width: inherit;
    border-radius: 50%;
    overflow: hidden;
  }
  .inner:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    background: linear-gradient(
      to right,
      rgba(128, 128, 128, 1) 0%,
      rgba(128, 128, 128, 1) 49%,
      rgba(255, 255, 255, 1) 49%,
      rgba(255, 255, 255, 1) 51%,
      rgba(128, 128, 128, 1) 51%,
      rgba(128, 128, 128, 1) 100%
    );
    /* W3C */
    top: 50%;
    left: 25%;
    border-radius: 10px 10px 0 0;
    box-shadow: inset 0 0 20px 2px rgba(0, 0, 0, 0.4);
  }
  .button {
    position: absolute;
    top: 140px;
    left: 52%;
    height: 5px;
    width: 5px;
    background: black;
    box-shadow: 0 20px black, 0 40px black;
    z-index: 10;
    border-radius: 50%;
  }
  .inner:after {
    content: "";
    position: absolute;
    top: 55%;
    left: 45%;
    width: 0;
    border: 10px solid white;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
  /*head*/
  .head {
    position: absolute;
    height: 120px;
    width: 50%;
    background: chocolate;
    top: 0;
    left: 25%;
    border-radius: 30% 30% 0 0;
  }
  .eye {
    position: absolute;
    top: 50%;
    left: 25%;
    width: 20px;
    height: 30px;
    background: white;
    border-radius: 40% 40% 0 0;
    -webkit-animation: blink 3s infinite;
    animation: blink 3s infinite;
  }
  .eye:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 8px;
    height: 10px;
    width: 4px;
    background: black;
  }
  .eye:nth-child(2) {
    left: calc(30% + 30px);
  }
  @-webkit-keyframes blink {
    0% {
      height: 30px;
      top: 50%;
    }
    5% {
      top: calc(50% + 30px);
      height: 0;
    }
    6% {
      height: 30px;
      top: 50%;
    }
    100% {
      height: 30px;
      top: 50%;
    }
  }
  @keyframes blink {
    0% {
      height: 30px;
      top: 50%;
    }
    5% {
      top: calc(50% + 30px);
      height: 0;
    }
    6% {
      height: 30px;
      top: 50%;
    }
    100% {
      height: 30px;
      top: 50%;
    }
  }
  .monicle {
    position: absolute;
    height: 30px;
    width: 30px;
    left: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: rgba(200, 200, 200, 0.8);
    box-shadow: inset 0 0 5px black;
  }
  .monicle:before {
    content: "";
    position: absolute;
    height: 25%;
    width: 50%;
    left: 25%;
    top: 25%;
    border-bottom: 3px solid white;
    border-top: 3px solid white;
    opacity: 0.4;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  .monicle:after {
    content: "";
    position: absolute;
    height: 35px;
    width: 20px;
    border-radius: 50%;
    border-left: 1px dotted white;
    bottom: -25px;
    right: -10px;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
  /*hat*/
  .top {
    height: 20px;
    width: 50%;
    background: black;
    border-radius: 50%;
    position: absolute;
    bottom: 140%;
    left: 30%;
    box-shadow: inset 0 0 2px lightgray;
    z-index: 12;
    transform: rotate(5deg);
    transform-origin: top left;
  }
  .top:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 100px;
    width: 100%;
    background: black;
    z-index: -1;
  }
  .top:after {
    content: "";
    position: absolute;
    top: 84px;
    left: -20%;
    height: 70%;
    width: 100%;
    border-radius: 50%;
    z-index: -2;
    border: 20px solid black;
    box-shadow: inset 0 0 0 1px gray, inset 0 0 0 10px black,
      0 5px 5px 2px rgba(0, 0, 0, 0.4);
  }
  b {
    position: absolute;
    top: calc(50% + 150px);
    left: 50%;
    width: max-content;
    text-align: center;
    font-size: 30px;
    color: antiquewhite;
    transform: translate(-50%, -50%);

    span{
        color: red;
    }
  }
`;

export default Welcome;
