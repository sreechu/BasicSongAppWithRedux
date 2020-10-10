import { combineReducers } from "redux";
//write both our reducers to be exportable

//1. gets static list of songs - returns an array of object , each object representing a song
export const songsReducer = () => {
return [
  //fixed list for now
  { title: "No Scrubs", duration: "4:05" },
  { title: "Macarena", duration: "2:35" },
  { title: "All Star", duration: "3:15" },
  { title: "I Want It that Way", duration: "3:37" },
];

};

//2. Reducer for selected song - remember : action is the actionCreator's action that this reducer is taking
export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//pass the object to the combineReducers - remember keys of the object are the keys that show up in the State
//then we make it exportable so any component can use this combined set of reducers!
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
