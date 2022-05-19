import React from "react";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import PlayList from "./components/playList/PlayList";
import "./App.css";
import spotify from "./util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTrack: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this)
    this.savePlaylist= this.savePlaylist.bind(this)
    this.search= this.search.bind(this)
  }
  addTrack(track) {
    let tracks = this.state.playlistTrack;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTrack: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTrack;
    tracks = tracks.filter((removedTrack) => removedTrack.id !== track.id);
    this.setState({ playlistTrack: tracks });
  }

  updatePlaylistName(name){
     this.setState({playlistName: name})
  }
  savePlaylist(){
   const  trackUris= this.state.playlistTrack.map(track=> track.uri)
   spotify.savePlaylist(this.state.playlistName, trackUris).then(
     this.setState({
       playlistName:'New playlist',
       playlistTrack:[]
     })
   )
  }
  search(term){
    spotify.Search(term).then(searchResults=>{
      this.setState({searchResults: searchResults})
    })
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistname={this.state.playlistName}
              playlistTrack={this.state.playlistTrack}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
