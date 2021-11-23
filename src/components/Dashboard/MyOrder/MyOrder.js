import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const[productOrders, setProductOrders] =useState([]);   
    const {user} = useAuth();
   
   
    useEffect(() =>{
        const url = `https://peaceful-forest-98151.herokuapp.com/productOrder/${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProductOrders(data));
    }, [user.email]);
    
    // delete a single booking
    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete this order?');
        if(confirm){
            const url = `https://peaceful-forest-98151.herokuapp.com/productOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = productOrders.filter(productOrder => productOrder._id !== id);
                setProductOrders(remaining);
            })
        }
    }
    return (
        <div>
            <div className="container">
                <h2 className="p-3 text-center">My Orders</h2>
                <div className="w-75 mx-auto">
                    <table className="table  table-hover shadow" >
                        <thead style={{color:'#cc2052'}}>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="fw-bold">
                            {
                                productOrders.map(productOrder =><tr key={productOrder._id}>
                                    <td>{productOrder.name}</td>
                                    <td>{productOrder.title}</td>
                                    <td>{productOrder.email}</td>
                                    <td>
                                    {
                                        productOrder?.status==="Pending"?
                                        <button className="btn btn-sm btn-warning">Pending</button>
                                        :
                                        <button className="btn  btn-sm btn-success">Shipped</button>
                                    }
                                    </td>
                                    <td><button className="btn btn-danger btn-sm text-white" onClick={() => handleDelete(productOrder._id)}>Delete</button></td>
                                  </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;