import React from 'react';
import "../Styles/Network.css";
import NetworkS from "../Assets/Network.png";
import Twitter from "../Assets/twitter.png";
import Instagram from "../Assets/instagram.png";
import Facebook from "../Assets/facebook.png";
import Ellipse from "../Assets/Ellipse2.png"
import Logo2 from '../Assets/Logo2.png';
import Party from "../Assets/party.png";

const Network = () => {
  return (
    <div className='network-container'style={{ backgroundImage:`url(${Ellipse})`,backgroundRepeat:"no-repeat",backgroundSize:"", backgroundPositionX:"38rem", backgroundPositionY:"10rem",  }} >
        <div className='network-content-container'>
        <div className='network-col'>
        <div className='col-1'>
            <div className='col-1-content'>
                <div className='col-1-image'>
                  <img  src={NetworkS} alt=""/>
                </div>
                <div className='col-1-text'>
                <h1>Hire Fast, Onboard Faster & Enhance Candidate<br/>Experience</h1>
                <p>Turbo-charge your engineering team by tapping into our pool of HR<br/> resources ⚡</p>
                <button>Join our Network <img src={Party} alt=""/></button>
                </div> 
            </div>
        </div>
        <div className='col-2'>
            <div className='col-2-content'>
              <div className='sub-col'>
               <div className='card-1'>
                <div className='card-1-contents'>
                <div className='card-text'>
                 <h1>Join our community</h1>
                <p>You can find sneak peeks, vote on upcoming features, chat,share and learn from our team.</p>
                </div>
                <div className='socials'>
                 <img src={Twitter}  alt=""/>
                 <img  src={Instagram} alt="/"/>
                 <img  src={Facebook}  alt="/"/>
                </div>
                </div>
               </div>
               <div className='card-2'>
                <div className='card-1-contents'>
                <div className='card-text'>
                 <h1>Not Sure of Where to Begin?</h1>
                <p>Meet with our team, ask questions, get clarity, that’s why we are here!</p>
                </div>
                <button>Request A Demo</button>
                </div>
               </div>
              </div>
            </div>
        </div>
        <div className='col-3'>
        <div className='footer-container'>
         <div className='footer-content'>
            <div className='footer-box'>
            <div className='col'>
            <div className='footer-logo'>
            <img src={Logo2}  alt=""/>
            </div>
            <p>The AI-backed tech resourcing platform</p>
            </div>
            <div className='col'>
            <h4>Product</h4>
            <a href="/">Technical Hiring</a>
            <a href="/">CoreHR Software</a>
            <a href="/">Payroll Management</a>
            <a href="/">People Management</a>
            </div>
            <div className='col'>
            <h4>Company</h4>
            <a href="/">About us</a>
            <a href='/'>FAQs</a>
            <a href='/'>Talk to an expert</a>
            </div>
            <div className='col'>
            <h4>Legal</h4>
            <a href="/">Terms & Conditions</a>
            <a href='/'>Privacy</a>
            </div>
           </div>
           <div className='copy-right'>
            <div className='line'>
            </div>
             <p>Copyright ReactHQ 2023 All rights reserved.</p>
           </div>
         </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Network;