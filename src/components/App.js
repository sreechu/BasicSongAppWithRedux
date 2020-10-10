import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import LoginToSpotify from './LoginToSpotify';
import "./App.css";

function App() {
  return (
    <div className="ui container grid grid-margin">
      <LoginToSpotify/>
      SongList:
      <div className="ui container row">

        <div className="column eight wide">
          <SongList />
         
        </div> <div className="column eight wide">
        <SongDetail/></div>
      </div>
    </div>
  );
}

export default App;
