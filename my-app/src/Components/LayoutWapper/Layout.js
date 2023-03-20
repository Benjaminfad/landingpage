import React from "react";
import Styles from "../../Styles/DashBoard.module.css";
import TopBar from "./Global/TopBar";
import Sidebar from "./Global/SideBar";


function Layout  ()  {
  return (
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
  );
}

export default Layout;