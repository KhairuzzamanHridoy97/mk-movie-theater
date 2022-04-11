import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
            <h2>Book Your Favourite Movie</h2>
            <Container>

            {
                movies.map( movie=>
                    <Movie 
                    movie={movie}
                    key={movie.id}
                      >

                    </Movie>
                )
            }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Movies;