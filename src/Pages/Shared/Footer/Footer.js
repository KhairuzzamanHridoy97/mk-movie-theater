import { Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Grid container spacing={3} className='bg-dark text-danger mt-3'>
        <Grid item xs>
            <p>
              KH Movie Theater
            </p>
      
        </Grid>
        <Grid item xs={6}>
                 <p>Home</p>
                <p>Service</p>
                <p>Contact</p>
                <p>About MovieTheater</p>
        </Grid>
        <Grid item xs>
        <p>Copyright © 2022 KH IT-Tech</p>
            <p>We promise to our clients and is <br /> constantlystriving to improve  <br />performance and heightened satisfaction of clients and developer.</p>
        </Grid>
      </Grid>
        
    );
};
    
export default Footer;