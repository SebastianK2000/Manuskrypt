import '../style/loginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;

`;

const Login = () => {
    return (
        <LoginRoot>
            <div className='Login'>
                <form className="login-form" action="">
                    <h1>Login</h1>
                    <div className="inputBox">
                        <input className="loginIInput" type="text" placeholder='Login' required />
                        <FaUser className="icon" />
                    </div>

                    <div className="inputBox">
                        <input className="passwordInput" type="password" placeholder='Password' required />
                        <FaLock className="icon" />
                    </div>

                    <div className="wrapperLogin">
                        <button className="login-button" type="submit">Login</button>
                    </div>

                    <div className="registerLink">
                        <p>Don't have an account?<Link to="/Register"> Register</Link></p>
                        <p>Do you don't need log in?<Link to="/Books"> Back to the book page</Link></p>
                    </div>
                </form>
            </div>
        </LoginRoot>
    );
};

export default Login;
