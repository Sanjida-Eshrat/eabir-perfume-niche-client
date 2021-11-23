import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [homeProducts, setHomeProducts] = useState([])
    useEffect(() => {
        fetch('https://peaceful-forest-98151.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => {
                setHomeProducts(data.products)
            });
    }, [])
    return (
        <div className="mt-5 pb-4 container-fluid">
            <h2 className="text-center py-4">Best Selling <span style={{color:'#CC2052'}}> Perfumes </span></h2>
                { homeProducts.length === 0 ? 
                 <Spinner animation="border"/>
                  :
                    <Row xs={1} md={2} lg={3} className="g-3 mt-3">
                    {
                        homeProducts.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                    </Row> 
                } 
        </div>
    );
};

export default Products;