import React from 'react'
import "../Styles/Manager.css";
import Ellipse from "../Assets/Ellipse2.png"
import Vector11 from "../Assets/Vector11.png"
import Vector12 from "../Assets/Vector12.png"
import Vector13 from "../Assets/Vector13.png"
import Vector14 from "../Assets/Vector14.png"
import Vector21 from "../Assets/Vector21.png"
import Vector17 from "../Assets/Vector17.png"

const Manager = () => {
  return (
    <div className='manager-container'style={{ backgroundImage:`url(${Ellipse})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", backgroundPositionY:"30px",  }} >
    <div className='manager-content' >
     <div className='manager-info'>
      <h1>End-to-End HR Management System Built By Managers for Managers</h1>
      <p>ReactHQ is an all-in-one HR platform for modern companies who want to centralize all their HR, automate repetitive procedures and empower employees to full potential.</p>
     </div>
     <div className='manager-card-container' >
     <div className='manager-card'>
        <div className='manager-card-details'>
        <img  src={Vector11} alt=""/>
        <h2>Recruitment & Staff Sourcing</h2>
        <p>Hire fast and streamline recruitment<br/>
to create best candidate experience.</p>
        </div>
        <div className='manager-card-details'>
        <img src={Vector21} alt=""/>
        <h2>Onboarding</h2>
        <p>Speedy Onboarding from anywhere <br/>
and any device.</p>
        </div>
        <div className='manager-card-details'>
        <img src={Vector17} alt="" />
        <h2>Employee Management</h2>
        <p>Forget about spreadsheets, keep<br/>
your employee data in one place. </p>
        </div>
        <div className='manager-card-details'>
        <img src={Vector12} alt="" />
        <h2>payroll</h2>
        <p>Automate things to pay your staff 
on <br/>time when the time comes</p>
        </div>
        <div className='manager-card-details'>
        <img src={Vector13} alt="" />
        <h2>performance Enablement</h2>
        <p>Modern approach to run<br/>
performance review for your team.</p>
        </div>
        <div className='manager-card-details'>
        <img src={Vector14} alt="" />
        <h2>Time Tracking</h2>
        <p>Easily clock in-out , track working<br/> 
time, connect with payroll.</p>
        </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Manager;