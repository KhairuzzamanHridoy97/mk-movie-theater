import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import OurMovies from '../OurMovies/OurMovies/OurMovies';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurMovies></OurMovies>
            <Footer></Footer>
        </div>
    );
};

export default Home;