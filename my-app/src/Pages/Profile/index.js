
import Styles from "../../Styles/DashBoard.module.css"
import TopBar from "../../Components/LayoutWapper/Global/TopBar";
import Sidebar from "../../Components/LayoutWapper/Global/SideBar";
import React from 'react'


function index() {
  return  (
      <div className={Styles.container}>
      <TopBar/>
      <div className={Styles.main} >
       <div className={Styles.context} >
       <div className={Styles.nav}>
       <Sidebar />
       </div>
       </div>
      </div>
      
      
      
      </div>
  )
}

export default index;