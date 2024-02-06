import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/common';

const Dashboard = props => {
  const history = useNavigate();
  const user = getUser();


  const handleLogout = () => {
    removeUserSession();
    history('/login');
  }

  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <input type="button" onClick={()=>history("/updateUser", {state: user})}></input>
          <div>
            Name<h2>{user.firstname}</h2>
            Email<h2>{user.email}</h2>
          </div>
          
        </div>

      </div>

      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;