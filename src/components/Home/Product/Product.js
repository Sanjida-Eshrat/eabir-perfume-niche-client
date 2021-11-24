import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {_id,title,description,img,price,star} = props.product;
    return (
        <div>
            <Col>
                <Card style={{height:'520px'}} className="border-light shadow text-center">
                    <Card.Img variant="top" src={img} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title style={{color:'#CC2052'}}>{title}</Card.Title>
                        <Card.Text>{description.slice(0,60)}</Card.Text>
                        <Card.Text className="fw-bold">Price: ${price}</Card.Text>
                        <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color" readonly></Rating>
                        <Card.Text className="fw-bold">Rating: {star}</Card.Text>
                        <Link to={`/productOrder/${_id}`}>
                            <Button style={{backgroundColor:'#CC2052'}} className="border-light "><i class="fas fa-shopping-cart"></i> Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;