import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import "./App.css";

function App() {
  return (
    <div className="grid-margin">
      <div className="ui container grid ">
        Please read about Redux for this use case
        <a href="https://github.com/sreechu/BasicSongAppWithRedux">here</a>
        <h2>SongList:</h2>
        <div className="ui container row">
          <div className="column eight wide">
            <SongList />
          </div>{" "}
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
