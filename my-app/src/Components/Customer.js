import React from 'react'
import "../Styles/Customer.css";
import Ellipse20 from "../Assets/Ellipse20.png"
import Vectors from "../Assets/Vectors.png";
import image2 from "../Assets/image2.png"
import Vectors2 from "../Assets/Vectors2.png"

const Customer = () => {
  return (
    <div className='customer-container'>
        <div className='customer-card'>
            <div className='customer-content'>
            <div className='customer-heading'>
            <h1>FROM OUR CUSTOMERS</h1>
            <h2>Don’t just take our word for it.</h2>
           <img  src={Vectors} alt=""/>
            </div>
           <div className='customer-review'>
            <div className='customer-paragraph'>
            <p>"I had to process about 25 or 30 people very quickly, like in a day, and we did not have ReactHQ at the time so I was doing that all manually. Using it (ReactHQ) helps me automate my work, which is important if you want to scale and bring new employees and just operate better."</p>
            <img src={Vectors2} alt=''/>
            </div>
            <div className='customer-profile'>
             <img src={Ellipse20} alt='' />
             <div className='customer-profile-text'>  
              <h1>Gabriel Nolan</h1>
             <p>Consultant</p>
             </div>   
            </div>
            <div className='customer-sponsor'>
            <img src={image2} alt='' />
            </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Customer