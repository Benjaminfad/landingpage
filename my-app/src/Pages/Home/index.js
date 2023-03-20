import React from 'react'
import Styles from "../../Styles/DashBoard.module.css"
import TopBar from "../../Components/LayoutWapper/Global/TopBar";
import Sidebar from "../../Components/LayoutWapper/Global/SideBar";
import Widget from  "../../Assets/Widget.png";




function index() {
  return  (
      <div className={Styles.container}>
      <TopBar/>
      <div className={Styles.main} >
       <div className={Styles.context} >
       <div className={Styles.nav}>
       <Sidebar />
       </div>
       <div className={Styles.center}>
        <div className={Styles.info}>
        <div className={Styles.Header}>
         <h1>Welcome Babatunde Samuel</h1> 
        </div>
          </div>
         <div className={Styles.Box}>
          <div className={Styles.Item}>
          <div className={Styles.Group}>
           <div className={Styles.left}>
            <div className={Styles.card}>
              <div className={Styles.details} >
               <h2>Let us begin with the fundamentals.</h2>
               <div className={Styles.Progress}>
               <p>Get more by filling out your profile.</p>
               <span>20% complete</span>
              </div>
              <div className={Styles.control} >
                 <div className={Styles.line}> <span></span></div>
                 </div>
               </div>
              <div className={Styles.fill}>
                 <form>
                  <input type="radio"></input>
                  <label>Complete your profile</label>
                  <input type="radio"></input>
                  <label>Complete educational history</label>
                  <input type="radio"></input>
                  <label>Complete employment history</label>
                  <input type="radio"></input>
                  <label>Setup profile</label>                                                                                                                                                          
                  </form> 
              </div>
            </div>           
            </div>
           <div className={Styles.right}>
            <div className={Styles.context}>
            <div className={Styles.bar}>
             <div className={Styles.details}>
              <h2>Get Verified</h2>
              <p>Follow the steps below. (0 of 6 completed)</p>
              <form className={Styles.form}>
                  <input type="radio"></input>
                  <label>Complete your profile</label>
                  <input type="radio"></input>
                  <label>Complete educational history</label>
                  <input type="radio"></input>
                  <label>Complete employment history</label>
                  <input type="radio"></input>
                  <label>Setup profile</label> 
                  <input type="radio"></input>
                  <label>Setup profile</label> 
                 </form> 
             </div>
            </div>
            <div className={Styles.bars}>
              <div className={Styles.details}>
                <h2>Suggestions</h2>
              <div className={Styles.Suggestions}>
                <div className={Styles.One}>
                 <img  src={Widget} alt="" /> 
                 <div className={Styles.text}>
                 <h3>Front-end Developer</h3>
                 <p>Cdlp Hub. Fulltime</p>
                </div>
                </div>
                <div className={Styles.Two}>
                <img  src={Widget} alt="" /> 
                <div className={Styles.text}>
                 <h3>Back-end Developer</h3>
                 <p>Cdlp Hub. Fulltime</p>
                </div>
               </div>
              </div>
              </div>
            </div>
            </div>
           </div>
          </div>
          </div>
         </div>
       </div> 
       </div>
      </div>
      </div>
  )
}

export default index