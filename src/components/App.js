
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';


export default App;
/**
 * api call to users profile
 * 
 * add a feature for user to add albums they dont want
 * add a feature for user to add liked genres in case they do not have spotify
 * 
 */

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


function App() {
    document.body.style.backgroundColor = "lightgrey";
    const CLIENT_ID = 'fd3853df5fa84767b1fe1956c1e62579'
    const REDIRECT_URI = "http://localhost:3000/account"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const SPACE_DELIMITER = "%20";
    const SCOPES = ['user-read-currently-playing', ' user-read-playback-state', 'playlist-read-private']
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

    const [token, setToken] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            console.log(token)
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)
        }



    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Nav/>
                <br></br>
                <br></br>
                <h1><center><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`}> Connect your Spotify here</a></center></h1>
                <br></br>
                <br></br>
                <br></br>
                <center><h3>Spotify is not required for you to enjoy our service. You can also fill out the information </h3>
                    <h3>below for us to get a better idea of the music you love!</h3></center>
                <br></br>
                <br></br>
                <center><h3>Enter any Artist names you would not want to recieve a Vinyl for </h3>
                    <br></br>
                    <TextField id="outlined-basic" label="" color="secondary" variant="outlined" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Enter any Albums you would not want to receive. This could be some that you already own  </h3>
                    <br></br>
                    <TextField id="outlined-basic" label="" color="secondary" variant="outlined" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Enter your fav music genres  </h3>
                    <br></br>
                    <TextField id="outlined-basic" label="" color="secondary" variant="outlined" /></center>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center><Button color="secondary" variant="contained">
                    <Link to="/profile">Submit</Link>
                </Button></center>
            </header>
        </div>


    )
};



