import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProduct = () => {
    const[products, setProducts] =useState([]);   
    const {user} = useAuth();
   
    //show all products
    useEffect(() =>{
        fetch('https://peaceful-forest-98151.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    // delete a single product
    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete this product?');
        if(confirm){
            const url = `https://peaceful-forest-98151.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div>
            <div className="container">
                <h2 className="pb-3 m-0 text-center">Manage <span style={{color:'#CC2052'}}> Products</span></h2>
                <div className="w-75 mx-auto">
                    <table className="table  table-hover shadow" >
                        <thead style={{color:'#CC2052'}}>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="fw-bold">
                            {
                                products.map(product =><tr key={product._id}>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.star}</td>
                                    <td><button className="btn btn-danger btn-sm text-white" onClick={() => handleDelete(product._id)}>Delete</button></td>
                                  </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;