import React from 'react'
import "../../Styles/Talent.css";
import Vector from "../../Assets/Vector10.png";
import Vec from "../../Assets/Vec.png"
import Group from "../../Assets/Group.png"

const Talent = () => {
  return (
    <div className='talent-container'>
    <div className='talent-content'>
    <div className='talent-info'>
    <div className='talent-header'>
    <h1>
      Talent Sourcing
    </h1>
    <p>We maintain an elite network of pre-vetted African technical talents who are tested, graded and effectively matched with our partners in an integrated talent and project management ecosystem.</p>
    </div>
    <div className='talent-body'>
     <img src={Vec} alt=""/>
    <p>When screening talents, we determine how each prospect will fit into that structure in addition to possessing the appropriate skill set to excel in the job opportunity.</p>
     <img src={Vector} alt=""/>
    <p>We also facilitate exclusive talent management support from start to finish, providing consistent performance management and evaluation for every talent assigned to your company.</p>
    </div>
    </div>
    <div className='talent-image-container'>
    <img  src={Group} alt=""/>
    
    </div>
    </div>
    </div>
  )
}

export default Talent