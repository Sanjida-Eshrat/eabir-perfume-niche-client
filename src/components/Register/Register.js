import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/banner4.jpg';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="container my-5 p-5 w-75 ">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    {!isLoading && <Form onSubmit={handleLoginSubmit}>
                        <h3 className="text-secondary mb-4">Create an Account</h3>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="text" name="name" onBlur={handleOnBlur} className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input onBlur={handleOnBlur} name="email" type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input name="password" type="password" onBlur={handleOnBlur} className="form-control" placeholder="Your Password" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input name="password2" type="password" onBlur={handleOnBlur} className="form-control" placeholder="Confirm Password" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                                <div className="form-check m-0">
                                    <p className="text-secondary">Already have an account?  <Link to="/login">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger fs-6 mx-auto">{authError}</div>
                    <div>
                        <button
                        type="submit"
                        className="btn ps-5 pe-5 text-white mb-1 mt-1"
                        style={{backgroundColor:'#f39792'}}
                        ><i class="fas fa-sign-in-alt"></i>Register</button>
                    </div>
                </Form>}
                {isLoading && <Spinner animation="border"/>}
                {user?.email && <Alert variant="success">Registered successfully!</Alert>}
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={login} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default Register;