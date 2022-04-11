import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OurMovie from '../OurMovie/OurMovie';

const OurMovies = () => {
    const [ourMovies,setOurMovies]= useState([]);
    useEffect(()=>{
        fetch('./movies.JSON')
        .then(res=>res.json())
        .then(data=>setOurMovies(data))
    },[])
    return (
        <>
        <Container>

            <h2 className="text-primary my-5">Our Movies</h2>
            <Row xs={1}  md={2} className="g-4">
            {
                ourMovies.slice(0,6).map(
                    ourMovie=> <OurMovie
                    ourMovie={ourMovie}
                    key={ourMovie.id}
                    >

                    </OurMovie>
                )
            }

            </Row>
        </Container>
        </>
    );
};

export default OurMovies;