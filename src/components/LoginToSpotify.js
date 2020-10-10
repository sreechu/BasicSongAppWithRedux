import React, { useState,useEffect } from "react";
import hash from "./hash";
import * as Constants from './constants';


export const LoginToSpotify = () => {
const [token,setToken] = useState(null);


/**
 * https://accounts.spotify.com/authorize?
 * response_type=code&
 * client_id=77e602fc63fa4b96acff255ed33428d3&
 * redirect_uri=http%3A%2F%2Flocalhost&scope=user-follow-modify&
 * state=e21392da45dbf4&
 * code_challenge=KADwyz1X~HIdcAG20lnXitK6k51xBP4pEMEZHmCneHD1JhrcHjE1P3yU_NjhBz4TdhV6acGo16PCd10xLwMJJ4uCutQZHw&
 * code_challenge_method=S256
 * 
 * 
 * 
 * https://accounts.spotify.com/authorize?
 * client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback
 * &scope=user-read-private%20user-read-email&response_type=token&state=123
 */



// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
    // Update the document title using the browser API
   // Set token
   let _token = hash.access_token;
   console.log('token: ' + _token);
   if (_token) {
       // Set token
       setToken(_token);
     }
  });
    
  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(Constants.CLIENT_ID);
  url += '&redirect_uri=' + encodeURIComponent('https://stupefied-euler-0f6cd2.netlify.app/');
  url += '&state=' + encodeURIComponent('123');
 

    return (
    <div >
      <header className="App-header">
      <img  className="App-logo" alt="logo" />
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={url}
        >
          Login to Spotify
        </a>
      )}
      </header>
    </div>

    )
}
export default LoginToSpotify;

/**
      {token && (
        // Spotify Player Will Go Here In the Next Step
      )} */

