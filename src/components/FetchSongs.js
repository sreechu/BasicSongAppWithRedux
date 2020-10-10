import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './constants';

  export const FetchSongs = ({token}) => {

  
const [tracks,setTracks] = useState(null);

    useEffect(() => {
       
        if (token) {
        // Set token
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
  