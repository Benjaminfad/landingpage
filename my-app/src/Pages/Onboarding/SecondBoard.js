import React from 'react'
import "../../Styles/SecondBoard.css";
import Logo from '../../Assets/ReactHQ logo.png';
import Solid from '../../Assets/Solid.png';
import Time from '../../Assets/Time.png';
import Vector29 from '../../Assets/Vector29.svg'


const Secondboard = () => {
  return (
    <div className='second-onboarding'>
      <div className='onboarding-2'>
        <div className='contents'>
          <div className='content-image'>
            <img src={Logo} alt=""/>
         </div>
          <div className='content-details'>
          <fieldset>
          <div className='items'>
            <div className='header-text'>
               <h1>Select account type</h1>
               <p>Choose the type of account you want to start with.</p>
            </div>
            <div className='link-container'>
             <a className='links' href='/'>
              <div className='link-items'>
             <img src={Time} alt="" width='60px' height='60px'/>
             <span>Find Job</span>
             
             <img src={Vector29} alt="" width='40px' height='20px' className='arrow' />
              </div>
             </a>
             <a className='links' href='/'>
              <div className='link-items'>
             <img src={Solid} alt="" width='60px' height='60px' />
             <span>Hire a Talent</span>
             <img src={Vector29} alt="" max-width='40px' height='20px' className='arrow'/>
              </div>
             </a>
            </div>
          </div>
        </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secondboard
