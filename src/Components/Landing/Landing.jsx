import React from "react";
import "./Landing.css";
import layer from "../../assets/myImage.png";
import { useSelector } from "react-redux";
const Landing = () => {
  const texts = useSelector((state) => state.translation.texts.summary);
    console.log(texts);
  
  return (
    <div className="landing h-100 w-100">
      <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 description">
          <h1>{texts.h1} <span>{texts.span}</span></h1>
          <p>{texts.body}</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 image_container">
          <img src={layer} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
