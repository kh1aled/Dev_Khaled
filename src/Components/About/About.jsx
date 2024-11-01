import React from "react";
import "./AboutStyles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import layer from "../../assets/myImage.png";
import circle from "../../assets/circle.svg";
import smcircle from "../../assets/smallCircle.svg";
import solidCircle from "../../assets/solidCircle.svg";
import wave from "../../assets/wave-2-svgrepo-com.svg";

const About = () => {
  const texts = useSelector((state) => state.translation.texts.about);
  return (
    <>
    <div className="about">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="image_container">
            <img className="profile" src={layer} alt="" />
            <img className="circle" src={circle} alt="" />
            <svg
              width="100%"
              height="200px"
              className="points"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,80 C50,100 100,60 150,80 C200,100 250,60 300,80 L300,200 L0,200 Z"
                fill="transparent"
              />

              <defs>
                <pattern
                  id="wave-dots"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="3" fill="#ffffff" />
                </pattern>
              </defs>

              <rect width="100%" height="200" fill="url(#wave-dots)" />
            </svg>
            <img className="wave" src={wave} alt="" />
            <img className="smcircle" src={smcircle} alt="" />
            <img className="solidCircle" src={solidCircle} alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 description">
          <h1>{texts.prename}</h1>
          <h1>{texts.name}</h1>
          <h1>{texts.name2}</h1>
          <h2>{texts.title}</h2>
          <button className="btn mybutton">
            <Link>{texts.button}</Link>
          </button>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default About;
