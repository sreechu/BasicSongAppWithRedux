import React, { useState,useEffect } from "react";
import hash from "./hash";
import * as Constants from './constants';

import FetchSongs from './FetchSongs';
export const LoginToSpotify = () => {
const [token,setToken] = useState(null);


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
  },[token]);
    
  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(Constants.CLIENT_ID);
  url += '&redirect_uri=' + encodeURIComponent('https://stupefied-euler-0f6cd2.netlify.app/');
  url += '&state=' + encodeURIComponent('123');

    return (
    <div>
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={url}
        >
          Login to Spotify
        </a>
      )}
    <div className="fetch-songs">
      {token && <FetchSongs token={token}/> }
      </div>
</div>
    )
};

export default LoginToSpotify;