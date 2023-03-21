
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Verify from './Pages/UserDetails/Verify.js';
import SignIn from './Pages/UserDetails/SignIn.js';
import SignUp from './Pages/UserDetails/SignUp.js';
import Firstboard from './Pages/Onboarding/FirstBoard.js';
import Secondboard from './Pages/Onboarding/SecondBoard.js';
import TopBar from './Components/LayoutWapper/Global/TopBar';
import HomePage from './HomePage';
import SideBar from './Components/LayoutWapper/Global/SideBar';
import Candidate from '././Pages/Candidate'
import Home from "././Pages/Home"
import Profile from "././Pages/Profile"
import Edit from "././Pages/Edit"
import Interview from "././Pages/Interview"
import Jobs from "././Pages/Jobs"
import Resume from "././Pages/Resume"
import Skill from "././Pages/Skill"
import SubHome from "././Pages/Home/SubHome";






function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/Firstboard' element={<Firstboard />} />
       <Route path='/Secondboard' element={<Secondboard />} />
       <Route path='/SignUp' element={<SignUp />} />
       <Route path='/SignIn' element={<SignIn />} />
       <Route path='/Verify' element={<Verify />} />
       <Route path='/' element={<HomePage />} />
       <Route path='/TopBar' element={<TopBar />} />
       <Route path='/SideBar' element={<SideBar />} />
       <Route path='/candidate' element={<Candidate />} /> 
     <Route path='/home' element={<Home/>} /> 
    <Route path='/profile' element={<Profile/>} /> 
    <Route path='/edit' element={<Edit />} /> 
    <Route path='/interview' element={<Interview />} />
    <Route path='/jobs' element={<Jobs />} />  
     <Route path='/resume' element={<Resume/>} />  
     <Route path='/skill' element={<Skill/>} />
     <Route path="/home/SubHome"  element={<SubHome/>}></Route>
       
      </Routes>  
    </div>
  );
}

export default App;
 