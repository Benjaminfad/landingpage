import React, {useState} from 'react';
import styles from '../Styles/Sponsor.css';
import Talent from './Info/Talent';
import Software from './Info/Software';
import Sponsor1 from '../Assets/sponsor 1.png';
import Sponsor2 from '../Assets/sponsor 2.png';
import Sponsor3 from '../Assets/sponsor 3.png';
import Sponsor4 from '../Assets/sponsor 4.png';


const Sponsor = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    // handle tab switching
    const handleTab1 = () => {
      setActiveTab("tab1");
    };
  
    const handleTab2 = () => {
      setActiveTab("tab2");
    };
    const handleTab3 = () => {
        setActiveTab("tab3");
      };
  

  return (
    <div className='sponsor-container'>
     <div className='sponsor-content'> 
      <h2 className='spornsor-heading'>TRUSTED BY TOP COMPANIES WORLDWIDE</h2>
      <div className='sponsor-image'>
        <img src={Sponsor3}  alt="" />
        <img src={Sponsor2}  alt=""/>
        <img src={Sponsor1}  alt=""/>
        <img src={Sponsor4}  alt=""/>
      </div>
     </div>
     <div className='nav-container'>
     <div className='nav-slider-container'>
      <span id='focus' className={activeTab === "tab1" ? styles.active : ""} 
      onClick={handleTab1}>Talent Sourcing</span>
      <span className={activeTab === "tab2" ? styles.active : ""}
      onClick={handleTab2} >CoreHR Software</span>
      <span className={activeTab === "tab3" ? styles.active : ""}
      onClick={handleTab3}>People & Payroll Management</span>
     </div>
     </div>
     <div className="outlet">
       
          {/* content goes here */}
          {activeTab === "tab1" ?  <Talent /> : <Software /> };
           
        </div>
        
    </div>
  )
}

export default Sponsor;