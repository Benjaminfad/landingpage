import React from 'react'
import "../../Styles/FirstBoard.css"
import Logo from '../../Assets/ReactHQ logo.png';
import Folder from '../../Assets/Folder.png';
import Diamond from '../../Assets/Diamond.png';
import Talent2 from '../../Assets/Talent2.png';
import Vector8 from '../../Assets/Vector8.png';

function Firstboard() {
  return (
    <div className='onboard-container'>
        <div className='onboard'>
        <div className='onboard-content'>
        <div className='onboard-logo'>
            <img src={Logo} alt=""/>
        </div>
        <div className='header-content'>
          <h1>Help us give you the best experience 🥳</h1>
          <p>What brings you to ReactHQ?</p>
        </div>
         <div className='card-container'>
            <div className='card-group'>
                <div className='card'>
                 <div className='card-content'>
                 <div className='card-image'>
                 <img src={Talent2} alt=""/>
                 </div>
                 <div className='card-details'>
                 <h1>Talent Sourcing</h1>
                 <p>Hire the best talent with barely any effort. We’ve taken care of everything for you. Sit back and relax.</p>
                 </div>
                 </div>
                </div>
                <div className='card'>
                 <div className='card-content'>
                 <div className='card-image'>
                 <img src={Diamond} alt=""/>
                 </div>
                 <div className='card-details'>
                 <h1>HR System</h1>
                 <p>Our system lets you focus on strategic HR by letting you automate much of your employee life-cycle processes - from hire through to exit. </p>
                 </div>
                 </div>
                </div>
                <div className='card'style={{ backgroundColor:"" }} >
                 <div className='card-content'>
                 <div className='card-image'>
                 <img src={Folder} alt=""/>
                 </div>
                 <div className='card-details'>
                 <h1>Payroll Management</h1>
                 <p>Prepare payroll automatically and never lose an employee over delays or payroll mistakes. </p>
                 </div>
                 </div>
                </div>
            </div>
            <button>Back To Home
             <img src={Vector8} alt=''/>
            </button>
         </div>
         
        </div>
        </div>
    </div>
  )
}

export default Firstboard
