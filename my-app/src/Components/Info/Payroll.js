import React from 'react';
import "../../Styles/Talent.css";

import GroupB from "../../Assets/GroupB.png";


const Payroll = () => {
  return (
    <div className='talent-container'>
    <div className='talent-content'>
    <div className='talent-info'>
    <div className='talent-header'>
    <h1>
     Payroll Management  
    </h1>
    <p>Our cloud-based payroll software enables HR and payroll teams to stay in control of payroll and deliver the right pay on the right day. You can empower your teams to consistently deliver the payroll promise whilst saving time, reducing errors and future-proofing your system with our payroll software. </p>
    </div>
    <div className='talent-body'>   
    <p>Modern and friendly to use, our payroll systems are completely online, which means each time you login, you know you're using the very latest and most up-to-date technology.</p> 
    </div>
    </div>
    <div className='talent-image-container'>
    <img  src={GroupB} alt=""/>
    
    </div>
    </div>
    </div>
  )
}

export default Payroll;