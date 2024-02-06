import { useState } from "react";
import axios from "axios";
const url = "http://192.168.1.23:1500/account/signup/"

const Signup = () => {
    const [firstname, setFirstname] =       useState('');
    const [lastname, setLastname] =         useState('');
    const [email, setEmail] =               useState('');
    const [password, setPassword] =         useState('');
    const [phone, setPhone] =               useState('');
    const [dateofbirth, setDateofbirth] =   useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(url, { firstname: firstname, 
                                                 lastname: lastname, 
                                                 email: email, 
                                                 password: password, 
                                                 phone: phone, 
                                                 dateofbirth : dateofbirth
                                                });
            console.log(resp.data);
        }catch (error) {
            console.log(error.response)

        }
    };

    return (
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'/>
                    <label htmlFor='name' className='form-label'>
                        firstname
                    </label>
                    <input
                    type='text'
                    className='form-input'
                    id='firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <div className='form-row'/>
                    <label htmlFor='name' className='form-label'>
                        lastname
                    </label>
                    <input
                    type='text'
                    className='form-input'
                    id='lastname'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <div className='form-row'/>
                    <label htmlFor='name' className='form-label'>
                        email
                    </label>
                    <input
                    type='text'
                    className='form-input'
                    id='email'
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
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        phone
                    </label>
                    <input
                    type='text'
                    autoComplete='true'
                    className='form-input'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className='form-row'/>
                    <label htmlFor='dateofbirth' className='form-label'>
                        dateofbirth
                    </label>
                    <input
                    type='date'
                    className='date'
                    id='date'
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                />
                </div>
                <button type='submit' className='btn btn-block'>
                 Create Account
                </button>
            </form>
        </section>
  );
};
export default Signup;