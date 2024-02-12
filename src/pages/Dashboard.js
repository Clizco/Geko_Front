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

  const deleteUser = (id, firstname) => {
    if (window.confirm(`Estas seguro de eliminar ${firstname}`)){  
      fetch("http://localhost:1500/account/deleteUser", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              userid: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.data)
             
            });

    }else {

    }
    handleLogout();

  }

  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <input type="button" onClick={()=>history("/updateUser", {state: user})}></input>
          <div>
            Full Name<h2>{user.firstname +" "+ user.lastname}</h2>
            Email<h2>{user.email}</h2>
          </div>
          
        </div>

      </div>

      <input type="button" onClick={handleLogout} value="Logout" />
      <input type="button" onClick={()=>deleteUser(user._id, user.firstname)} value="Delete" />
    </div>
  );
}

export default Dashboard;