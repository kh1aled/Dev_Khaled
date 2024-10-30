import React, { useRef } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../Store/TranslationSlice";
import img from "../../assets/abc-block.png";
import dev_kh from "../../assets/dev_khaled.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const texts = useSelector((state) => state.translation.texts);
  const dispatch = useDispatch();
  const collapse = useRef();
  const bars = useRef();

  const handleshow = () => {
    collapse.current.classList.toggle("show");
  };

  return (
    <nav className="navbar myNav navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleshow}
      >
        <i className="fa-solid fa-angle-down"></i>
      </button>
      <div className="progress-bar"></div>
      <div className="navbar-icon">
        <img src={dev_kh} alt="" />
        <div className="change_theme_container">
          
          <button className="change_theme_button">
          <div className="active_el"></div>
            <button className="bright">
            <svg width="24" height="24" fill="none" class="transform transition-transform scale-100 duration-300"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button className="dark">
              <svg
                width="24"
                height="24"
                fill="none"
                class="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-100 scale-100"
              >
                <path
                  d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
        </div>
      </div>
      <div
        ref={collapse}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">contact</Link>
          </li>
          <li className="nav-item lang">
            <a
              className="nav-link"
              title={
                texts.lang === "en"
                  ? "change language to arabic"
                  : "تغير اللغة الي الانجليزية"
              }
              onClick={() =>
                texts.lang === "en"
                  ? dispatch(changeLanguage("ar"))
                  : dispatch(changeLanguage("en"))
              }
            >
              {texts.navbar.lang}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
