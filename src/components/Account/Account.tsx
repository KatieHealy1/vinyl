import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { padding, styled, textTransform } from '@mui/system';
import { palette } from '@mui/system';

// create account page
export const NavbarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  backgroundColor: 'black',
  color: 'white'
})

const Logo = styled('h1')({
  margin: '0 0 0 0.95em'
})

const LogoA = styled(Link)({
  color: '#ec5c94',
  listStyle: 'none',
  textTransform: 'lowercase',
  textDecoration: 'none',
  backgroundColor: 'black'
})

const LogoNavigation = styled('h1')({
  listStyle: 'none',
  textTransform: 'capitalize',
  textDecoration: 'none',
  display: 'flex',
  backgroundColor: 'black',
  color: 'white'
})

const NavA = styled(Link)({
  display: 'block',
  padding: '0.5em',
  color: 'lightgrey',
  backgroundColor: 'black',
  fontSize: '25px'
})

 const Nav = () => {
    return (
      <NavbarContainer>
        <Logo>
            <LogoA to="/">Vinyl</LogoA>
        </Logo>
        <LogoNavigation>
            <li>
            <NavA to="/">Home</NavA>
            </li>
            <li>
            <NavA to="/create-account">Create Account</NavA>
            </li>
            <li>
                <NavA to="/profile">Profile</NavA>
            </li>
            <li>
            <NavA to="/signin">Sign In</NavA>
            </li>
        </LogoNavigation>
      </NavbarContainer>
    )
  }
export function Account() {
  document.body.style.backgroundColor = "lightgrey";

  return (   
    <>
    <Nav/>      
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <center><TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="First Name"
        />
<br></br>
        <TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="Last Name"
        />
<br></br>
        <TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="Email"
        />
<br></br>
        <TextField label="Password" color="secondary" focused
          required
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
        />
<br></br>
          <TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="Shipping Address"
        />
<br></br>
          <TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="City"
        />
<br></br>
          <TextField label="Required" color="secondary" focused
          required
          id="outlined"
          defaultValue="State"
        />
<br></br>
          <TextField label="Required" color="secondary" focused
          required
          id="outlined-required"
          defaultValue="Zip Code"
        />
<br></br>
<br></br>
<br></br>

        <Button variant='contained' color = 'secondary'>
          <Link to="/account">Submit</Link>
          </Button></center>

      </div>
      
    </Box>
    </>
  );
}
