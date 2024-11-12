import React from "react";
import "./MyworkStyles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/Screenshot 2024-11-03 173854.png";
const Work = () => {
  const texts = useSelector((state) => state.translation.texts.about);
  let lang = useSelector((state) => state.translation.language);
  let theme = useSelector((state) => state.theme.theme);
  console.log(lang);

  return (
    <section id={"experience"} className={theme === "dark" ? "work dark" : "work light"}>
      <h1 className="title">{texts.work}</h1>
      <div className="slider">
        <div className="row g-4 slider_container p-3">
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 work-item"
            data-aos="fade-up"
          >
            <Link to={"test.html"} className="card">
              <div className="project-title">
                <h1>blog website</h1>
              </div>
              <div className="line"></div>
              <img src={img} alt="" />
            </Link>
          </div>
        </div>
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

export default Work;
