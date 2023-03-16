import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import  { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StrictMode>
  <App/>
  </StrictMode>
  
  
  </BrowserRouter>
    
  
);


