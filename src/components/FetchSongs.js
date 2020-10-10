import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './constants';



  
  export const FetchSongs = () => {
    useEffect(() => {
    
        // code to run on component mount
        axios.get(`${URL}`)
                .then(response => response.json())
                .then(json => setUser(json.data))
      }, []);

    const [user, setUser] = useState(null);
      return (
          <div>
              {user}
          </div>
      )
  }

  export default FetchSongs;
  