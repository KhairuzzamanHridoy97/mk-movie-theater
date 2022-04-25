// import { Card, CardContent, CardMedia, Grid,Button, Typography } from '@mui/material';
import React from 'react';
import { Col,Card } from 'react-bootstrap';

const Movie = ({movie}) => {
    const{title,img,description,id,watchFee}=movie;
    return (
        <>
          <Col>
             <Card>
               <Card.Img variant="top" src={img}  />
                 <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Card.Text className="text-danger">
                  WatchFee: {watchFee} USD
                </Card.Text>
                  <button className='btn btn-primary'>Book</button>
                </Card.Body>
            </Card>
          </Col>
        </>
    );
};

export default Movie;