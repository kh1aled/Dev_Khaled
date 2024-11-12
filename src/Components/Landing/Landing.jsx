import React from "react";
import "./Landing.css";
import layer from "../../assets/myImage.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Landing = () => {
  const texts = useSelector((state) => state.translation.texts.summary);
  const theme = useSelector((state) => state.theme.theme);
  return (
    <section id={"landing"} className={theme === "dark" ? "landing h-100 w-100 dark":"landing h-100 w-100 light"}>
      <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 description">
          <h1>{texts.h1} <span>{texts.span}</span></h1>
          <p>{texts.body}</p>
          <button className="btn"><Link>{texts.button}</Link></button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 image_container">
          <img src={layer} alt="" />
        </div>
        
      </div>
    
    </section>
  );
};

export default Landing;
