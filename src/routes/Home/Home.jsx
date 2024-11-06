import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import About from "../../Components/About/About";
import Fotter from "../../Components/Fotter/Fotter";
import Skills from "../../Components/Skills/Skills";
import Work from "../../Components/Mywork/Mywork";
import Eduction from "../../Components/Eduction/Eduction";

const Home = () => {
  const [scroolValue, SetScroolValue] = useState(0);
  const [navbarActive, SetNavbarActive] = useState(false);
  const [navWidth, SetnavWidth] = useState(0);

  const changeBg = () => {
    SetScroolValue(window.scrollY);
    const scrollTop = window.scrollY; // المسافة التي تم تمريرها من أعلى الصفحة
    const scrollHeight = document.documentElement.scrollHeight; // الطول الكامل للمحتوى
    const clientHeight = document.documentElement.clientHeight; // الطول المرئي من الصفحة

    // حساب النسبة المئوية للتمرير
    SetnavWidth(((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2));

    console.log(navWidth);

    if (scroolValue > 50) {
      SetNavbarActive(true);
    } else {
      SetNavbarActive(false);
    }
  };
  window.onscroll = changeBg;
  return (
    <div className="home">
      <Navbar status={navbarActive} navWidth={navWidth}/>
      <Landing />
      <About/>
      <Eduction />
      <Skills />
      <Work />
      <Fotter />
    </div>
  );
};

export default Home;
