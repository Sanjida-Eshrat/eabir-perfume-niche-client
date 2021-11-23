import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../images/banner3.jpg';
const About = () => {
    return (
        <div className="container my-5 p-5 w-75 shadow">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    <h2>About <span  style={{color:'#CC2052'}}>Eabir</span></h2>
                    <p>Eabir is a popular online shop that provides all natural and halal perfumes for women.The name "Eabir" is an arabic synonym of the word "fragrance". We have perfumes of various brands at a reasonable price.Whether you’re Muslim seeking all natural halal perfumes, or you’re looking for a unique scent that isn’t loaded with chemicals, you can choose from any of our products without worrying about health. </p>
                    <Link to="/login">
                            <Button className="border-light" style={{backgroundColor:'#CC2052'}} >Get Started</Button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-12 ">
                    <img src={about} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default About;