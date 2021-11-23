import React from 'react';
import about from '../../../images/logo.jpg';

const DashboardHome = () => {
    return (
    <div className="container my-5 p-5 w-75 shadow">
        <div className="row d-flex">
            <div className="col-lg-6 col-md-12 mt-5 text-start">
                <h2>Welcome to <span  style={{color:'#CC2052'}}>Dashboard</span></h2>
                <p>We have perfumes of various brands at a reasonable price.Whether you’re Muslim seeking all natural halal perfumes, or you’re looking for a unique scent that isn’t loaded with chemicals, you can choose from any of our products without worrying about health. </p>
            </div>
            <div className="col-lg-6 col-md-12 ">
                <img src={about} alt="" className="img-fluid"/>
            </div>          
        </div>
    </div>
    );
};

export default DashboardHome;