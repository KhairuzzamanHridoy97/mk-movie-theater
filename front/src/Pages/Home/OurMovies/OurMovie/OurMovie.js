// import { CardMedia ,Card,Button,CardContent, Typography, Grid} from '@mui/material';
import React from 'react';
import {  Card, Col } from 'react-bootstrap';

const OurMovie = ({ourMovie}) => {
    const {img,title,description,id,watchFee}= ourMovie;
    return (
        <>
       <Col>
          <Card>
               <Card.Img variant="top" src={img} style={{height:'250px',width:"562px"}} />              
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

export default OurMovie;
















    //     