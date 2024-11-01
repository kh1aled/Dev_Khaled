import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Main_title from '../../Components/Main_title/Main_title'

const Home = () => {
  return (
   <div className="home">

     <Navbar/>
     <Landing/>
     <Main_title/>
   </div>
  )
}

export default Home