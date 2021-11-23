import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ExploreProduct from '../ExploreProduct/ExploreProduct';


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://peaceful-forest-98151.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div className="mt-5 pb-4 container-fluid">
            <h2 className="text-center py-4">Explore Our <span style={{color:'#CC2052'}}> Products </span></h2>
            { products.length === 0 ? 
                 <Spinner animation="border"/>
                  :
                    <Row xs={1} md={2} lg={3} className="g-3 mt-3">
                    {
                        products.map(product => <ExploreProduct
                            key={product.id}
                            product={product}
                        ></ExploreProduct>)
                    }
                    </Row> 
                }  
        </div>
    );
};

export default Explore;