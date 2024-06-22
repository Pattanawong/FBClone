import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">

      <div className='LLogin'>
        <h1>facebook</h1>
        <p>Connect with friends and the world </p>
        <p> around you on Facebook.</p>
      </div>
      <div className='RLogin'>
        
        <form className='card'>
        <input type="email" placeholder="Email or phone number"required />
        <br></br>
        <input type="password" placeholder="Password" required />
        <br></br>
        <button className='submit'>Login</button>
        <br></br>
        <Link to='/Main'>Forgot password ?</Link>
        <hr></hr>
        <Link to='/Create' className='create'>Create New Account</Link>
        </form>
        
        
        
      </div>
    </div>
  );
}

export default Login;