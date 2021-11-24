import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../images/banner3.jpg';
const About = () => {
    return (
        <div className="container my-5 p-5 w-75 shadow">
            <div className="row d-flex">
                <div className="col-lg-12 col-md-12 mt-2 mb-4 text-center">
                    <h2>About <span  style={{color:'#CC2052'}}>Eabir</span></h2>
                    <p>Eabir is a popular online shop that provides all natural and halal perfumes for women.The name "Eabir" is an arabic synonym of the word "fragrance". We have perfumes of various brands at a reasonable price.Whether you’re Muslim seeking all natural halal perfumes, or you’re looking for a unique scent that isn’t loaded with chemicals, you can choose from any of our products without worrying about health. </p>
                    {/* <Link to="/login">
                            <Button className="border-light" style={{backgroundColor:'#CC2052'}} >Get Started</Button>
                    </Link> */}
                </div>
                <div className="col-lg-6 col-md-12 mt-4 pt-3">
                   <div className="row">
                        <div className="col-md-12 card border-0">
                            <div className="card-body text-start">
                                <h5 className="card-title text-warning"><i className="fas fa-air-freshener me-2 border border-2 border-warning rounded-circle p-2"></i>Top Brands</h5>
                                <p className="card-text text-secondary">World's top branded perfumes now at Eabir!</p>
                            </div>
                            <div className="card-body text-start">
                                <h5 className="card-title text-info"><i className="fas fa-wallet me-2 border border-2 border-info rounded-circle p-2 "></i>Best Price</h5>
                                <p className="card-text text-secondary">Get your favourite perfumes without worrying about budget!</p>
                            </div>
                            <div className="card-body text-start">
                                <h5 className="card-title text-success"><i className="fas fa-award me-2 border border-2 border-success rounded-circle p-2"></i>Halal Certified</h5>
                                <p className="card-text text-secondary">All perfumes are halal certified!</p>
                            </div>        
                        </div>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-4 pt-3">
                    <img src={about} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default About;