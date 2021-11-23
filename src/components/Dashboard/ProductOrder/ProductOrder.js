import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating';

const ProductOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/dashboard/myOrder';
    const {
        register, 
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    useEffect(() =>{
        fetch(`https://peaceful-forest-98151.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[]);

    const onSubmit = (data) => {
        data.status= "Pending";
        fetch('https://peaceful-forest-98151.herokuapp.com/productOrder', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              alert("Ordered Successfully!");
              reset();
              history.push(redirect_uri);
        });
    };

    return (
        <div className="container">
        <Row xs={1} md={2} className="g-3 mt-3 p-5">
            <Col>
                <Card style={{height:'530px'}} className="border-light shadow text-center w-100">
                    <Card.Img variant="top" src={product.img} style={{height:'200px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title style={{color:'#CC2052'}}>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Rating
                        initialRating={product.star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color" readonly></Rating>
                        <Card.Text className="fw-bold">Price: ${product.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
            <Col>
            <div className="w-100 mx-auto py-2 mb-5 shadow">
                <div className="border-0  justify-content-center align-items-center">
                    <h2 className="p-3">Order Your <span style={{color:'#CC2052'}}> Perfume</span></h2>
                    <div className="mx-auto">
                       <form onSubmit={handleSubmit(onSubmit)}>
                            {
                               product?.title &&  <input
                               {...register("title")}
                               defaultValue={product?.title}
                               placeholder="Title"
                               className="p-2 m-2 w-75 border border-secondary rounded"
                               />
                            }
                           <br />
                           <input
                            {...register("name")}
                            defaultValue={user.displayName}
                            placeholder="Name"
                            className="p-2 m-2 w-75 border border-secondary rounded"
                            />
                           <br />
                           <input
                            {...register("email")}
                            defaultValue={user.email}
                            placeholder="Email"
                            className="p-2 m-2 w-75 border border-secondary rounded"
                            />
                           <br />
                          <input
                          {...register("city", { required: true })}
                          placeholder="City"
                          className="p-2 m-2 w-75 border border-secondary rounded"
                          />
                          <br />
                          {errors.exampleRequired && <span>This field is required</span>}
                          <input type="submit" value="Confirm Order" className="btn w-75 border border-light text-white fw-bold rounded m-3" style={{backgroundColor:'#CC2052'}} />
                        </form>
                    </div>
                </div>
            </div>
            </Col> 
        </Row> 
    </div>
    );
};

export default ProductOrder;