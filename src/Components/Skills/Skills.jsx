import React from "react";
import "./SkillsStyles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Skills = () => {
  const texts = useSelector((state) => state.translation.texts.about);
  let lang = useSelector((state) => state.translation.language);
  let theme = useSelector((state) => state.theme.theme);
  console.log(lang);

  return (
    <section
      id={"skills"}
      className={theme === "dark" ? "skills dark" : "skills light"}
    >
      <h1 className="title">skills</h1>
      <h3 className="description">{texts.desc}</h3>
      <div className="slider">
        <div className="row g-3 slider_container">
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-html5 fa-3x"></i>
            <h1>HTML</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-css3-alt fa-3x"></i>
            <h1>CSS</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-js-square fa-3x"></i>
            <h1>JavaScript</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-react fa-3x"></i>
            <h1>React</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fas fa-database fa-3x"></i>
            <h1>Redux</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-sass fa-3x"></i>
            <h1>Sass</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fas fa-code fa-3x"></i>
            <h1>PugJS</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-bootstrap fa-3x"></i>
            <h1>Bootstrap</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-php fa-3x"></i>
            <h1>PHP</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fas fa-database fa-3x"></i>
            <h1>MySQL</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-laravel fa-3x"></i>
            <h1>Laravel</h1>
          </div>
          <div
            className="col-6 col-md-4 col-lg-2 skill-item"
            data-aos="fade-right"
          >
            <i className="fab fa-github fa-3x"></i>
            <h1>Git</h1>
          </div>
        </div>
        {/* <ul
          className={
            (lang = "en"
              ? "skills_container list-items"
              : "skills_container list-items ar")
          }
        >
          <li className=""></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
          <li className="skill-item"></li>
        </ul> */}
      </div>
      <button className="btn">
        <Link
          to="https://github.com/kh1aled/CV/raw/main/FAANGPath_Simple_Template__1_%20(1).pdf"
          download={"FAANGPath_Simple_Template__1_%20(1).pdf"}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          {texts.button2}
        </Link>
      </button>
    </section>
  );
};

export default Skills;
