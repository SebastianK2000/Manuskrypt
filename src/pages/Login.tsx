import React from 'react';
import '../style/loginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='Register'>
            <form action="">
                <h1>Login</h1>
                <div className="inputBox">
                    <input type="text" placeholder='Login' required />
                    <FaUser className='icon' />
                </div>

                <div className="inputBox">
                    <input className="passwordInput" type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <button type="submit">Login</button>

                <div className="registerLink">
                    <p>Don't have an account?<Link to="/Register">  Register</Link></p>
                    <p>Do you don't need log in?<Link to="/Books">  Back to the book page</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
