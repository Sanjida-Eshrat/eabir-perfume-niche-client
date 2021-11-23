import React from 'react';
import notFound from '../../images/error-404.jpg';
const NotFound = () => {
    return (
        <div>
            <div className="container">
                    {/* 404 image */}
                    <img src={notFound} className="w-50 h-auto" alt="" />
    
           </div>
            
        </div>
    );
};

export default NotFound;