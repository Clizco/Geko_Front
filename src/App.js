import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink} from 'react-router-dom';
import React from 'react';

import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import { getToken, removeUserSession, setUserSession} from './utils/common';

import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import UpdateUser from './pages/UpdateUser';




const inlineStyles ={
  padding: 5
}

const App = () => {
  return(
    <BrowserRouter>
    <div className="header">
      <NavLink style={inlineStyles} className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
      <NavLink style={inlineStyles} className={({ isActive }) => isActive ? 'active' : ''} to="/login">Login</NavLink>
      <NavLink style={inlineStyles} className={({ isActive }) => isActive ? 'active' : ''} to="/signup">Sign Up</NavLink>
      
    </div>
    <div className="content">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/updateuser' element={<UpdateUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
   
  ) 
}

export default App;
