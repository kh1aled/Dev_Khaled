import React from "react";
import "./EductionStyles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import frontend from "../../assets/5592921.jpg";
import backend from "../../assets/web-design-website-coding-concept.jpg";
import cyper from "../../assets/4547762.jpg";
import videoEdit from "../../assets/attractive-male-video-editor-works-with-footage-video-his-personal-computer-having-break-communicating-his-smartphone-he-works-creative-office-studio-home-neon-lights.jpg";
const Eduction = () => {
  const texts = useSelector((state) => state.translation.texts.eduction);
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <section className={theme === "dark" ? "eduction dark" :"eduction light"}>
        <h1 className="title">{texts.h1}</h1>
        <div className="description">
          <h1>
            {texts.title} <span>{texts.span}</span>
          </h1>
          <p>{texts.body}</p>
        </div>
        <div className="areas">
          <h1 className="title">{texts.title2}</h1>
          <div className="slider">
            <div className="row g-4 slider_container p-3">
              <div className="col-12 col-md-6 col-lg-4 work-item" data-aos="fade-up">
                <Link className="card" >
                  <div className="project-title">
                    <h1>frontend development</h1>
                  </div>
                  <div className="line"></div>
                    <img src={frontend} alt="" />
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-4 work-item" data-aos="fade-up" >
                <Link className="card">
                  <div className="project-title">
                    <h1>backend development</h1>
                  </div>
                  <div className="line"></div>
                    <img src={backend} alt="" />
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-4 work-item" data-aos="fade-up">
                <Link className="card">
                  <div className="project-title">
                    <h1>cyper security</h1>
                  </div>
                  <div className="line"></div>
                    <img src={cyper} alt="" />
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-4 work-item" data-aos="fade-up">
                <Link className="card">
                  <div className="project-title">
                    <h1>video editing</h1>
                  </div>
                  <div className="line"></div>
                    <img src={videoEdit} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title">{texts.visionTitle}</h1>
        <div className="description">
          <p>{texts.vision}</p>
        </div>
      </section>
    </>
  );
};

export default Eduction;
