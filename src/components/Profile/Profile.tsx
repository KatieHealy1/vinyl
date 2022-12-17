import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'
import { serverCalls } from '../../api/api'



/**
 * figure out how to:
 * 
 * pull in access token
 * api call to users profile
 * pull genre information from user playlists
 * pull back a random album based on the genre of their playlists
 * */
 const NavbarContainer = styled('div')({
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
export const Nav = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
  
    return (
      <NavbarContainer>
        <Logo>
            <LogoA to="/">Vinyl</LogoA>
        </Logo>
        <LogoNavigation>
            <li>
            <NavA to="/">Home</NavA>
            </li>
              <>
                <li>
                <NavA to="/create-account">Create Account</NavA>
                </li>
                <li>
                <NavA to="/signin">Sign In</NavA>
                </li>
              </>
              <>
                <li>
                  <NavA to="/profile">Profile</NavA>
                </li>
                <li>
                <NavA to="/signout">Sign Out</NavA>
                </li>
              </>
        </LogoNavigation>
      </NavbarContainer>
    )
  }
  
  

 export const Profile = () => {
    document.body.style.backgroundColor = "lightgrey";
    return(
        <>
        <Nav/>
        <div>
<br></br>
<br></br>
<br></br>
            <center><h2>We are putting together something special for you.</h2></center>
<br></br>
<br></br>
<br></br>
            <center><h3>Once you receive your first vinyl you will be able to see a collection on your profile of all vinyl's you have received from us!</h3></center>
<br></br>
<br></br>
<br></br>
            <center><h4>Your shipment date is scheduled for January 20th. You will receive an email once it has shipped.</h4></center>
<br></br>
<br></br>
<br></br>
        </div>
        </>
    )
}
    
   