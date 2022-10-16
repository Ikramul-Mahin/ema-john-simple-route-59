import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name='email' placeholder='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input required type="password" name='password' placeholder='password' />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input required type="password" name='confirm' placeholder='confirm password' />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>Already have an account!<Link to='/login'>Log-In</Link></p>
        </div>
    );
};

export default SignUp;