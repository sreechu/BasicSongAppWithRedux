import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './constants';
import hash from './hash';

  export const FetchSongs = () => {

   const [token,setToken] = useState(null);
const [tracks,setTracks] = useState(null);

    useEffect(() => {
        // Set token
        let _token = hash.access_token;
        if (_token) {
        // Set token
        setToken(_token);

        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

        axios.get('https://api.spotify.com/v1/me/player')
            .then(res => {
                setTracks(res.data);
                console.log(tracks);
            });
        } else{
            setTracks('something went wrong');
        }
      }, [token,tracks]);
      return (
          <div>
              {tracks}
          </div>
      )
  }

  export default FetchSongs;
  