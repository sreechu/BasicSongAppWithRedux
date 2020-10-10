/*This compnent needs to know song selected from the updated Store/State data
with the help of connect component*/

/**Also note that:
 * The connect function talks to the provider to communicate the store 
 * for getting the selectedSong details!
 */


import React from 'react'
//get the connect function
import {connect} from 'react-redux';

const SongDetail= (props) => {
    if(props.selectedSong){
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {props.selectedSong.title}
                
            </p><p>Duration: {props.selectedSong.duration}</p>
        </div>
    )
    }
    return <div>Please select a song</div>
};

const mapStateToProps = (state) =>{
    //reach into the state and pull out the data we need
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
