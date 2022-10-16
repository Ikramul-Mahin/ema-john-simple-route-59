import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>login</h2>
            <form action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name='email' placeholder='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input required type="password" name='password' placeholder='password' />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>New to Ema-John <Link to='/signup'>Create a new account!</Link></p>
        </div>
    );
};

export default Login;