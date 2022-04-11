import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Movie from '../Movie/Movie';

const Movies = () => {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        fetch('./movies.JSON')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h1  className='text-danger my-5'>Book Your Favourite Movie</h1>
            <Container>
                <Row xs={1}  md={3} className="g-4">
                    {
                        movies.map( movie=>
                            <Movie 
                            movie={movie}
                            key={movie.id}
                            >

                            </Movie>
                        )
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Movies;