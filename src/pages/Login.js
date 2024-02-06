import { useState } from "react";
import axios from "axios";
import { Navigate, redirect, redirectDocument, useNavigate } from "react-router";
const url = "http://192.168.1.23:1500/account/signin/"

const Login = props => {
    const history = useNavigate();
    const [email, setEmail] =               useState('');
    const [password, setPassword] =         useState('');
    const [user, setUser] =                 useState({});
    const [error, SetError] =               useState(null);
    const [loading, setLoading] =           useState(false);
    
const handleLogin = async (e) => {
        e.preventDefault();
        SetError(null);
        setLoading(true);
        try {
            const resp = await axios.post(url, { email: email, 
                                                 password: password,
                                                });
            const userApiUrl = 'http://localhost:1500/account/users/token'
            const userData = await axios.get(userApiUrl, {  headers: {
                'x-access-token': resp.data.token  }
            });
            setLoading(false)
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('userData', JSON.stringify(userData.data))
            
           
            
            console.log(userData.data)
            
            setUser(userData.data)
            history('/dashboard')
            
            
                        
        }catch (error){
            console.log(error.response)
            

        }

    const USER = JSON.parse(localStorage.getItem('userData'))
        
        
    }
    

    
    return (
        <section>
            <form className='form' onSubmit={handleLogin}>
                <div className='form-row'/>
                    <label htmlFor='name' className='form-label'>
                        email
                    </label>
                    <input
                    type='text'
                    className='form-input'
                    id='name'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='form-row'/>
                    <label htmlFor='password' className='form-label'>
                        password
                    </label>
                    <input
                    type='text'
                    className='form-input'
                    id='name'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='btn btn-block'>
                 login
                </button>
                
            </form>
            <div>
            </div>
            
        </section>
        
  );
}

export default Login