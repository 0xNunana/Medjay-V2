import React from 'react';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
 import About from './pages/About';
import Dashboard from './pages/Dashboard';
 import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
