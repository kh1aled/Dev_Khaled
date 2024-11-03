import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import About from '../../Components/About/About'
import Main_title from '../../Components/Main_title/Main_title'
import Fotter from '../../Components/Fotter/Fotter'
import Skills from '../../Components/Skills/Skills'
import Work from '../../Components/Mywork/Mywork'

const Home = () => {
  return (
   <div className="home">

     <Navbar/>
     <Landing/>
     <Main_title/>
     <Skills/>
     <Work/>
     <Fotter/>
   </div>
  )
}

export default Home