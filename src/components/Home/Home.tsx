import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import music from '../../assets/images/music.jpeg';
import { isPropertyDeclaration } from 'typescript';
import { Link } from 'react-router-dom'




interface Props {
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

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

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${music})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '36%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textTransform: 'lowercase',
    fontFamily:'serif'
    
})


export const Home = (props: any) => {
    


    return (
        <Root>
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
                <NavA to="/signin">Sign In</NavA>
                </li>


                <li>
                  <NavA to="/profile">Profile</NavA>
                </li>
                <li>
                <NavA to="/signout">Sign Out</NavA>
                </li>

        </LogoNavigation>
      </NavbarContainer>
    
            
            <Main>
                <MainText>
                    <h1>How it works:</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Step 1:</h2>
                    <p>Create an account and link your spotify for our experts to review </p>
                    <br></br>
                    <br></br>
                    <h2>Step 2:</h2>
                    <p>Fill out your profile and answer a few simple questions. We want to make this tailored to YOU! </p>
                    <br></br>
                    <br></br>
                    <h2>Step 3:</h2>
                    <p>Wait anxiously for your vinyl to arrive... </p>

                </MainText>
            </Main>
            </Root>
)}