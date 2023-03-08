import React  from 'react';
import Info from '../Assets/party-popper.png';
import Vector5 from '../Assets/Vector5.png'



const Infobar = () => {
  return (
    <div className='nav-info-container'>
      <div className='nav-info-icon'>
      <img src={Info} alt="" className='happy'/>
      <p>Web development class starts March 12, 2023</p>
       <button className='info-button'>
           Take Eligibility Test <img src={Vector5} />
        </button>
      </div>
      </div>
  )
}

export default Infobar;