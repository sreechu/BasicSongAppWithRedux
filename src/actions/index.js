import axios from 'axios';

//Action creator [named export]
export const selectSong = (song) => {
  //Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};


export const songFetch = (token) =>{
  
  const songsObj = [];
  if (token) {
    
      // Set token
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

      axios.get('https://api.spotify.com/v1/tracks/?ids=11dFghVXANMlKmJXsNCbNl,20I6sIOMTCkB6w7ryavxtO,7xGfFoTpQ2E7fRF5lN10tr')
          .then(res => {
            res.data.tracks.map(eachTrack => {songsObj.push({title: eachTrack.name, duration: eachTrack.duration_ms/60000}) })
            //console.log(songsObj);
          });
      };
      return {type:"SONG_FETCH", payload: songsObj}; 
};
