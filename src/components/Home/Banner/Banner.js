
import React from 'react';
import { Container } from 'react-bootstrap';
import  banner from '../../../images/banner1.jpg';
const Banner = () => {
    return (
        <div className="bg-light m-0 text-white container-fluid " 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${banner})`,
            // backgroundImage: `url(${banner})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'}}>
            <Container fluid>
                <div className="text-start container top-banner" style={{paddingTop:'195px',paddingBlockEnd:'180px'}}>
                <h1 className="pt-4 text-2">Welcome to <br/><span style={{color:'#f39792'}}>Eabir</span></h1>
                 <h6>Fragrance of Beauty</h6>
                </div>
            </Container>
        </div>
    );
};

export default Banner;