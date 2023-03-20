import React from 'react'
import { useState } from 'react';
import Styles from "./Styles/DashBoard.module.css"
import TopBar from "./Components/LayoutWapper/Global/TopBar";
import SideBar from './Components/LayoutWapper/Global/SideBar';
import { Route, Routes } from 'react-router-dom';
import Candidate from '././Pages/Candidate'
import Home from "././Pages/Home"
import Profile from "././Pages/Profile"
import Edit from "././Pages/Edit"
import Interview from "././Pages/Interview"
import Jobs from "././Pages/Jobs"
import Resume from "././Pages/Resume"
import Skill from "././Pages/Skill"


function HomePage()  {
   const [isSidebar, setIsSidebar] = useState(true)




  return (
    <div className={Styles.container}>
    <div className={Styles.box}>
      <div className={Styles.content}>
      <p>Complete your profile, take a skill assessment to get verified and start applying for top paying jobs now!</p>
      <span>Hide</span>
      </div>
    </div>
    <TopBar setIsSidebar={setIsSidebar}/>
    <div className={Styles.main} >
     <div className={Styles.context} >
     <div className={Styles.nav}>
     <SideBar isSidebar={isSidebar}/>
     </div>
     </div>
    </div>
    <Routes>
     <Route path='/candidate' element={<Candidate />} /> 
     <Route path='/home' element={<Home/>} /> 
    <Route path='/profile' element={<Profile/>} /> 
    <Route path='/edit' element={<Edit />} /> 
    <Route path='/interview' element={<Interview />} />
    <Route path='/jobs' element={<Jobs />} />  
     <Route path='/resume' element={<Resume/>} />  
     <Route path='/skill' element={<Skill/>} />
    </Routes>
    
    
    
    
    </div>
  )
}

export default HomePage;