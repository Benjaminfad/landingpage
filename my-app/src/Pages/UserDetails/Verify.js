import React from 'react'
import Styles from "../../Styles/VerifyPage.module.css";
import Group10 from '../../Assets/Group10.png'
import Logo from '../../Assets/ReactLogo.svg';


function SignUp() {
  return (
    <div className={Styles.container}>
        <div className={Styles.content}>
        <div className={Styles.col}>
            <div className={Styles.left}>
                <div className={Styles.contents}>
                    <div className={Styles.logo}>
                    <img  src={Logo} alt="" width="200px"/>
                    </div>
                    <div className={Styles.details}>
                        <img src={Group10} alt="" width="400px"/>
                     <p>On ReAct, you can connect with the best resources from around the world, accelerate projects, and find your dream job.</p>
                    </div>
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.info}>
                <div className={Styles.header}>
                    <h1>Please Enter the <span>OTP </span> Sent To Your Email</h1>
                </div>
               <form className={Styles.form}>
               <input type='text' placeholder='3'></input>
               <input type='text' placeholder='5'></input>
               <input type='text' placeholder='3'></input>
               <input type='text' placeholder='7'></input>
               <input type='text' placeholder='0'></input>  
               <button>Verify Email</button>
               </form>
               <p>Didn’t Receive an OTP?  <a href='/' className={Styles.link}>Send It Again</a></p>
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignUp;