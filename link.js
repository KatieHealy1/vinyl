import React, { useEffect } from "react";
import SpotifyGetPlaylists from "./components/SpotifyGetPlaylists/SpotifyGetPlaylists";
import "./WebApp.css";

const CLIENT_ID = "fd3853df5fa84767b1fe1956c1e62579"; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3001/create-account";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-read",
];

const WebApp = () => {
    const accountLogin = () => {
        window.location = `$(SPOTIFY_AUTHORIZE_ENDPOINT)?client_id=$(CLIENT_ID)&redirect_uri=$(REDIRECT_URL_AFTER_LOGIN)&scope=$(SCOPES_URL_PARAM)&response_type=token&show_dialog=true`
    };
    return (
        <div className="container">
            <h1>test</h1>
            <button onClick={accountLogin}> Login to spotify</button>
        </div>
    );
};

export default WebApp;