import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
       <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Movie Theater</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                       
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/movies'>Movies</Nav.Link>                       
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </>
    );
};

export default Navigation;

























































































// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import React from 'react';

// const Navigation = () => {
//     return (
//         <div>
//              <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Movie Theater
//           </Typography>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//         </div>
//     );
// };

// export default Navigation;











