import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/banner4.jpg';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, signInWithGoogle,loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container my-5 p-5 w-75 shadow">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    <Form onSubmit={handleLoginSubmit}>
                        <h3 className="text-secondary mb-4">Login</h3>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input onBlur={handleOnChange} type="email" placeholder="Your Email" 
                                name="email"
                                className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="password" onBlur={handleOnChange} className="form-control" placeholder="Your Password" 
                                name="password"
                                id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                                <div className="form-check m-0">
                                    <p className="text-secondary">New User? Please <Link to="/register">Register</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger fs-6 mx-auto">{authError}</div>

                        <div>
                        <button
                        type="submit"
                        className="btn  ps-5 pe-5 text-white mb-1 mt-1"
                        style={{backgroundColor:'#f39792'}}
                        ><i class="fas fa-sign-in-alt"></i> Login</button>

                    </div>
                    {isLoading && <Spinner animation="border"/>}
                    {user?.email && <Alert variant="success">Logged in successfully!</Alert>}
                       
                </Form>
                
                
                <p className="mt-1 text-secondary">------------Or------------</p>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn  ps-5 pe-5 text-white mb-1 mt-1"
                    style={{backgroundColor:'#cc2052'}}
                    ><i class="fab fa-google"></i> Google Sign In</button>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={login} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default Login;