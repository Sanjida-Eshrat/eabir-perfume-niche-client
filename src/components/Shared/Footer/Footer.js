import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import newLogo from '../../../images/logo2.jpg';
const Footer = () => {
    return (
        // <div>
        //     <div className="footer-container">
        //         <div className="container">
        //             <div className="row d-flex">
        //             <div className="col-md-5 col-12">
        //                 <div className="left-container text-start">  
        //                 <div className='d-flex'>
        //                     <img alt="logo" src={newLogo} width="50"/>
        //                     <h1 className="text-anim mt-2"><span style={{color:'#f39792'}}>Eabir</span></h1>
        //                 </div>
        //                 {/* <h1 className="text-anim"><span style={{color:'#f39792',marginTop:'10px'}}>Eabir</span></h1> */}
        //                 {/* #CC2052 */}
        //                 <p className="mt-4 ">
        //                     <small>
        //                       Fragrance of Beauty
        //                     </small>
        //                 </p>
        
        //                 <p className="mt-5">
        //                     <small>Eabir © . All rights reserved.</small>
        //                 </p>
        //                 </div>
        //             </div>
        //             <div className="col-md-2  col-12">
        //                 <div className="footer-menu-container">
        //                 <ul>
        //                     <li className="footer-menu">Home</li>
        //                     <li className="footer-menu">About</li>
        //                     <li className="footer-menu">Products</li>
        //                     <li className="footer-menu">Services</li>
        //                 </ul>
        //                 </div>
        //             </div>
        //             <div className="col-md-5">
        //                 <div className="right-footer-container">
        //                 <h3>For any enquiry</h3>
        //                 <input
        //                     className="footer-input"
        //                     type="text"
        //                     placeholder="Enter Email"
        //                 />
        //                 <div className="phone d-flex align-items-center justify-content-center mt-4">

        //                     <div>
        //                     <h5>+1 8 800 999 35 35</h5>
        //                     </div>
        //                 </div>
        //                 <div className="map d-flex align-items-center justify-content-center">
        //                     <div>
        //                     <p>
        //                         102 1st Avenue, London, UK
        //                     </p>
        //                     </div>
        //                 </div>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        //#f39792
        // </div>
        <div style={{backgroundColor:'#faf1f1'}}>
        <div className=" text-dark ms-4 me-4">
            <Row className="pt-4 text-color" lg={3} xs={1}>
                <Col className="text-color mb-2">
                    <h4 className="fw-bold"><img alt="logo" src={newLogo} width="55"/><span style={{color:'#cc2052',marginTop:'10px'}}>Eabir</span></h4>
                    <p>House #6 , Road-2</p>
                    <p>Rampura, Dhaka</p>
                    <p>Bangladesh</p>
                </Col>
                <Col className="text-color mb-2">
                    <h5 className="fw-bold" style={{color:'#cc2052'}}>Services</h5>
                    <p>Best Perfumes</p>
                    <p>Halal Certified</p>
                    <p>Best Price</p>
                </Col>
                <Col className="text-color mb-2">
                    <h5 className="fw-bold" style={{color:'#cc2052'}}>Contact</h5>
                    <p className="text-color"><i className="fas fa-phone-alt"></i> 01987654321</p>
                    <p className="text-color"><i className="far fa-envelope"></i> eabir@gmail.com</p>
                    <p>24 hours (seven days a week)</p>
                </Col>
            </Row>
        </div>
        {/* <hr className="bg-success w-75 mx-auto"/> */}
        <div className=" text-center p-1 text-white" style={{backgroundColor: '#cc2052'}}>
            © 2021 Copyright by Eabir        
        </div>
    </div>
    );
};

export default Footer;