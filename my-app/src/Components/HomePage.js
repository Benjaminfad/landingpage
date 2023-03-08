import React from 'react'
import Navbar from './Navbar'
import Infobar from './Infobar';
import Background2 from '../Assets/Background2.png';
import Sponsor from './Sponsor';
import Manager from './Manager';
import Customer from './Customer';
import Network from './Network';
import Party from "../Assets/party.png";


const HomePage = () => {
  return (
    <div className='home-container'>
       <Infobar/>
      <Navbar/>
    <div className='home-banner-container'>
      <div className='home-text-section'>
         <h1 className='primary-heading'>
         Hire, <span>Manage </span>&<span> Pay<br/> </span>Your <span>Technical</span>Talents  Wherever, <span>Whenever...</span>
         </h1>
        <p className='primary-text'>
        There is no need to use many tools for your people management. 
Take advantage of our all-in-one software to streamline your HR. 
        </p>
       <button className='second-primary-button'>Get Started <img src={Party} alt="" /></button> 
       </div>
       <div className='home-bannerImage-container'>
        <img src={Background2} alt=""/>
      </div>
    </div>
    <Sponsor/>
    <Manager/>
    <Customer/>
    <Network/>

    </div>
  )
}

export default HomePage;