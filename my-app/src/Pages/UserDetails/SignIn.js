import React from 'react'
import Styles from "../../Styles/SignIn.module.css";
import Group10 from '../../Assets/Group10.png';
import Logo from '../../Assets/ReactLogo.svg';

function SignIn() {
  return (
    <div className={Styles.container}>
    <div className={Styles.info}>
    <div className={Styles.column}>
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
                <h1>Sign in to your <span>Account</span></h1>
            </div>
           <form className={Styles.form}>
           <input type='text' placeholder='Enter Name'></input>
           <input type='password' placeholder='Enter password'></input>
           <p>Forgot password</p>  
           <button>Sign In</button>
           </form>
           <p className={Styles.txt}>Dont have an account? <a href='/' className={Styles.link}>Register</a></p>
           </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default SignIn;