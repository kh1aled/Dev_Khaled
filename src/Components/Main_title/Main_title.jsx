import React from 'react'
import "./Main_title.css"
import img from "../../assets/wave.svg"
import { useSelector } from 'react-redux';
const Main_title = () => {
    const texts = useSelector((state) => state.translation.texts.about);
  
  return (
    <section className="Main_title">
        <div className="title_container"><h1 className="title">{texts.title}</h1></div>
       {/* <img className='wave' src={img} alt="" /> */}
       <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>

    </section>
  )
}

export default Main_title