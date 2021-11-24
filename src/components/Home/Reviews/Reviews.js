import React, { useEffect, useState } from 'react';
import { Card, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://peaceful-forest-98151.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="mt-5 pb-4 container">
            <h2 className="text-center py-4">Customer <span style={{color:'#cc2052'}}> Reviews </span></h2>
                { reviews.length === 0 ? 
                 <Spinner animation="border"/>
                  :
                    <Row xs={1} md={2} lg={3} className="g-3 mt-2">
                    {
                        reviews.map(review => <Card className="text-center ">
                        <Card.Body >
                          <Card.Title style={{color:'#cc2052'}}>{review.name}</Card.Title>
                          <Card.Text>
                                {review.comment}
                          </Card.Text>
                          <Rating
                            initialRating={review.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color" readonly></Rating>
                        </Card.Body>
                      </Card>)
                    }
                    </Row> 
                } 
        </div>
    );
};

export default Reviews;