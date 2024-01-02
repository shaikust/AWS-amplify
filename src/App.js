import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register.js';
import Main from './pages/Main';
import EditProfile from './ui-components/EditProfile.jsx';
import ValidatePage from './pages/validatePage';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import Desktop1 from './ui-components/Desktop1.jsx';
import Card from './pages/Screen1';
import Instruction from './pages/Instruction';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus)
  }

  return (
     <>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EditProfile updateAuthStatus={updateAuthStatus}/>}/>
      <Route path='/main' element={<Main isAuthenticated={isAuthenticated}/>}/>
      <Route path='/register' element={<Desktop1/>}/>
      <Route path='/validate' element={<ValidatePage/>} />
      <Route path='/screen1' element={<Card isAuthenticated={isAuthenticated}/>}/>
      <Route path='/instruction' element={<Instruction isAuthenticated={isAuthenticated}/>}/>
    </Routes>
    </BrowserRouter>
      </>
     
  );
}

export default App;


