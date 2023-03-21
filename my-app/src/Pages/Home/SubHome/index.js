import React from 'react'
import { Box, Button, IconButton, InputBase } from '@mui/material';
import Styles from "../../../Styles/DashBoard.module.css"
import TopBar from "../../../Components/LayoutWapper/Global/TopBar";
import Sidebar from "../../../Components/LayoutWapper/Global/SideBar";
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';





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
          <div className={Styles.case} style={{ position:"relative" , top:"30px" ,width:"100%", }}  >
          <div className={Styles.container} style={{ display:"flex", }}  >
            <div className={Styles.content}  style={{ width:"60%" ,backgroundColor:"rgba(255, 255, 255, 1)" }} >
            <div className={Styles.box} style={{ width:"100%", border:"0.3px solid #999999", borderRadius:"10PX", }} >
            <div className={Styles.search} style={{ padding:"30px", }} >
              <div className={Styles.search} style={{ display:"flex", justifyContent:"space-between" }} >
              <Box 
                width="100"
                backgroundColor="rgba(255, 255, 255, 1)"
                border="0.5px solid #999999"
                borderRadius="5px"
                height="43px"
                padding="5px"
                >
              <IconButton type="button" sx={{ p:1}}>
                <SearchIcon sx={{ ml:3, flex:1, width:14.25, height:14.25, position:'relative', right:"30px" }}/>
               </IconButton>
               <InputBase sx={{ ml: 2, flex: 1, fontSize:12 ,position:'relative', right:"30px"}} placeholder="Job Title, Company"  /> 
               </Box>
               <Box 
                 width="100"
                backgroundColor="rgba(255, 255, 255, 1)"
                border="0.5px solid #999999"
                borderRadius="5px"
                height="43px"
                padding="5px"
               
               >
               <IconButton type="button" sx={{ p:1}}>
                <SearchIcon sx={{ ml:3, flex:1, width:14.25, height:14.25 , position:'relative', right:"30px" }} />
               </IconButton>
               <InputBase sx={{ ml: 2, flex: 1, fontSize:12 ,position:'relative', right:"30px" }} placeholder="City, state" />
               </Box>
               <Button
               sx={{fontSize:12 , background:"#F3723F", bordeRadius:"7.2381px",  padding:"10px" , width:"113px", height:"43px", color:"#fff"}} 
               
               >Find jobs</Button>
              </div>
              <div className={Styles.jobs}>
                <div className={Styles.items}>
                <div className={Styles.Header} style={{ marginTop:"3%"}}>
                 <h2 style={{ fontSize:"14px", fontWeight:"600"}}>Jobs based on your profile</h2>
                </div>
                <div className={Styles.wrapper} style={{ width:"100%", marginTop:"5%" }}>
                  <div className={Styles.container} style={{ display:"flex" , width:"100%" , gap:"20px" }}>
                    <div className={Styles.col} style={{ width:"50%" }}>
                      <div className={Styles.card} style={{ width:"100%",  borderRadius:"10px", height:"822px"}} >
                     <div className={Styles.box} style={{ display:"flex", flexWrap:"wrap", gap:"20px"}}> 
                       <div className={Styles.card} style={{ backgroundColor:"transparent" , width:"393px", height:"212px" , border: '0.5px solid #999999', borderRadius:"5px"}}>
                        <div className={Styles.items} style={{ display:"flex", gap:"40px"}}>
                          <div className={Styles.info}>
                            <ul style={{ listStyle:"none", lineHeight:"24px", position:"relative" , bottom:"9px"}}>
                            <li style={{ fontSize:"14px", fontWeight:"600"}} >UI/UX Designer</li>
                            <li style={{ fontSize:"14px"}} >Cdlp Hub Ltd</li>
                            <li style={{ fontSize:"14px"}} >Ibadan</li>
                            <li style={{ fontSize:"14px"}} >Onsite</li>
                            <li style={{ fontSize:"13px", marginTop:"60px"}} >Posted 2 days ago</li>
                            </ul>
                          </div>
                          <div className={Styles.info}>
                            <div className={Styles.icon} style={{ display:"flex", gap:"9px", position:"relative" , bottom:"3px" }}>
                              <BusinessCenterOutlinedIcon sx={{ width:"16.67px", height:"15.83px" , color:"rgba(243, 114, 63, 1)"}}/>
                             <p style={{ fontSize:"13px", color:"rgba(243, 114, 63, 1)"}}>Fulltime</p>
                           </div>
                          </div>
                        </div>
                       </div>
                       <div className={Styles.card} style={{ backgroundColor:"transparent" , width:"393px", height:"212px", border:"0.5px solid #999999", borderRadius:"5px"}}>
                       <div className={Styles.items} style={{ display:"flex", gap:"40px"}}>
                          <div className={Styles.info}>
                            <ul style={{ listStyle:"none", lineHeight:"24px", position:"relative" , bottom:"9px"}}>
                            <li style={{ fontSize:"14px", fontWeight:"600"}} >UI/UX Designer</li>
                            <li style={{ fontSize:"14px"}} >Cdlp Hub Ltd</li>
                            <li style={{ fontSize:"14px"}} >Ibadan</li>
                            <li style={{ fontSize:"14px"}} >Onsite</li>
                            <li style={{ fontSize:"13px", marginTop:"60px"}} >Posted 2 days ago</li>
                            </ul>
                          </div>
                          <div className={Styles.info}>
                            <div className={Styles.icon} style={{ display:"flex", gap:"9px", position:"relative" , bottom:"3px" }}>
                              <BusinessCenterOutlinedIcon sx={{ width:"16.67px", height:"15.83px" , color:"rgba(243, 114, 63, 1)"}}/>
                             <p style={{ fontSize:"13px", color:"rgba(243, 114, 63, 1)"}}>Fulltime</p>
                           </div>
                          </div>
                        </div>
                      </div>
                       <div className={Styles.card} style={{ backgroundColor:"transparent" , width:"393px", height:"212px" , border:"0.5px solid #999999", borderRadius:"5px" }}>
                       <div className={Styles.items} style={{ display:"flex", gap:"40px"}}>
                          <div className={Styles.info}>
                            <ul style={{ listStyle:"none", lineHeight:"24px", position:"relative" , bottom:"9px"}}>
                            <li style={{ fontSize:"14px", fontWeight:"600"}} >UI/UX Designer</li>
                            <li style={{ fontSize:"14px"}} >Cdlp Hub Ltd</li>
                            <li style={{ fontSize:"14px"}} >Ibadan</li>
                            <li style={{ fontSize:"14px"}} >Onsite</li>
                            <li style={{ fontSize:"13px", marginTop:"60px"}}>Posted 2 days ago</li>
                            </ul>
                          </div>
                          <div className={Styles.info}>
                            <div className={Styles.icon} style={{ display:"flex", gap:"9px", position:"relative" , bottom:"3px" }}>
                              <BusinessCenterOutlinedIcon sx={{ width:"16.67px", height:"15.83px" , color:"rgba(243, 114, 63, 1)"}}/>
                             <p style={{ fontSize:"13px", color:"rgba(243, 114, 63, 1)"}}>Fulltime</p>
                           </div>
                          </div>
                        </div>
                     </div>
                     </div>
                      </div>
                    </div>
                    <div className={Styles.col} style={{ width:"50%"  }}>
                    <div className={Styles.card} style={{ width:"100%", border:"0.5px solid #999999", borderRadius:"5px", height:"100%"}} >
                 </div>
                  </div>
                  </div>
               </div>
                </div>
              </div>
              </div>
              </div>
            </div>

            <div className={Styles.content} style={{ width:"40%"}}>
            <div className={Styles.box} style={{  width:"100%", border:"0.3px solid #999999", borderRadius:"10PX"}}>




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