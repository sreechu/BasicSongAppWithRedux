import React from "react";
//NOTE: This SongList is the component which needs the Connect component to tell the Provider to fetch the list of songs
import { connect } from "react-redux";

//also import the action creator 
import {selectSong} from '../actions';

const SongList = (props) => {
  function renderList() {
    //takes list of songs map and return
    return props.songs.map((eachSong) => {
      return (
        //create a JSX for eachSong here
        //style clases are from semantic-ui
        <div className="item" key={eachSong.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => {props.selectSong(eachSong)}}>Select</button>
          </div>
          <div className="content">{eachSong.title}</div>
        </div>
      );
    });
  }

  return <div className="ui divided list">{renderList()}</div>;
};

//that is a conventional name use =>  mapStateToProps
//we will take the redux store data and do some magic that eventually causes that data to show as props in our component
const mapStateToProps = (state) => {
  return {
    songs: state.songs, //refer index.js of reducers to see that the key is the same
  };
};

//looks weird but is ok - connect basically returns a function that takes in the SongList argument !! :)
//as seen in the diagram it is the connect function that asks the provider for the list of songs and then passes it down to the SongList component

//connect it self takes the above defined function as the argument
export default connect(mapStateToProps,{selectSong})(SongList);
