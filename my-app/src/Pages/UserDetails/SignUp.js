import React from 'react'
import Styles from "../../Styles/SignUp.module.css";
import Group10 from '../../Assets/Group10.png';
import Logo from '../../Assets/ReactLogo.svg';


function SignUp() {
  return (
    <div className={Styles.signup}>
        <div className={Styles.content}>
        <div className={Styles.container}>
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
                <div className={Styles.information}>
                <div className={Styles.header}>
                <h1>Join the <span>ReactHQ</span> Network</h1>
                </div>
               <form className={Styles.form}> 
               <input type='text' placeholder='Enter Name'></input>
               <input type='text' placeholder='Enter Email'></input>
               <input type='text' placeholder='Enter Phone Number'></input>
               <input type='password' placeholder='Enter password'></input>
               <input type='password' placeholder='Confirm password'></input>
               <input type='checkbox' className={Styles.check} placeholder='Confirm password'></input>
               <p className={Styles.text}>I accept the <span>Terms of Use</span> and I agree to the terms of <span>Privacy Policy</span>.</p>
                <spn className={Styles.spn}>Please accept the terms and conditions</spn>    
               <button>Register</button>
               </form>
               <p className={Styles.txt}>Already have an account? <a href='/' className={Styles.link}>Sign In</a></p>
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignUp;