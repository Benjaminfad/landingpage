import React from 'react';
import "../../Styles/Talent.css";
import Vec1 from "../../Assets/Vec1.png";
import Vec2 from "../../Assets/Vec2.png";
import GroupA from "../../Assets/GroupA.png"


const Software = () => {
  return (
    <div className='talent-container'>
    <div className='talent-content'>
    <div className='talent-info'>
    <div className='talent-header'>
    <h1>
    Core HR Software
    </h1>
    <p>Managing people is difficult. Automate your Human Resources Management with our HR Software that your employees will enjoy. Optimize your time as much possible and increase productivity with streamlined processes.</p>
    </div>
    <div className='talent-body'>
     <img src={Vec1} alt=""/>
    <p>Onboard new employees online to reduce paper processes and data entry.  Automatically sync your new hires into your employees database.</p>
     <img src={Vec2} alt=""/>
    <p>Develop a performance evaluation process that works well for your employees and company. Create goals to give employees a clear career development path.</p>
    </div>
    </div>
    <div className='talent-image-container'>
    <img  src={GroupA} alt=""/>
    
    </div>
    </div>
    </div>
  )
}

export default Software;