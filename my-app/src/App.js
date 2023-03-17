
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Verify from './Pages/UserDetails/Verify.js';
import SignIn from './Pages//UserDetails/SignIn.js';
import SignUp from './Pages//UserDetails/SignUp.js';
import Firstboard from './Pages/Onboarding/FirstBoard.js';
import Secondboard from './Pages/Onboarding/SecondBoard.js';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/Firstboard' element={<Firstboard />} />
       <Route path='/Secondboard' element={<Secondboard />} />
       <Route path='/SignUp' element={<SignUp />} />
       <Route path='/SignIn' element={<SignIn />} />
       <Route path='/Verify' element={<Verify />} />
      </Routes>  
    </div>
  );
}

export default App;
 