import React, { Component } from "react";
import TrackList from "../trackList/TrackList";
import "./PlayList.css";

export default class PlayList extends Component {
    constructor(props){
        super(props)
        this.handleNameChange= this.handleNameChange.bind(this)
    }
    handleNameChange(e){
    this.props.onNameChange(e.target.value)
    }
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
        <TrackList
          tracks={this.props.playlistTrack}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
