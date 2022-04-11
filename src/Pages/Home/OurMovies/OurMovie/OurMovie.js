import { CardMedia ,Card,Button,CardContent, Typography, Grid} from '@mui/material';
import React from 'react';
// import { Button, Card, Col } from 'react-bootstrap';

const OurMovie = ({ourMovie}) => {
    const {img,title,description,key}= ourMovie;
    return (
        <>
        <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="auto"
        width="auto"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant='contained'>Book</Button>
      </CardContent>
     
    </Card>
        </Grid>
        </>
    );
};

export default OurMovie;














    //     <Col>
    //         <Card>
    //             <Card.Img variant="top" src={img} style={{height:'50%'}} />
    //             <Card.Body>
    //             <Card.Title>{title}</Card.Title>
    //             <Card.Text>
    //               {description}
    //             </Card.Text>
    //             <button className='btn btn-primary'>Book</button>
    //             </Card.Body>
    //         </Card>
    // </Col>