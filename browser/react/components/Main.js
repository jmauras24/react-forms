import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylist from './containers/NewPlaylistContainer';
import axios from 'axios';

export default class Main extends Component {

  constructor(){
    super();
    this.state = {
      playlists: []
    }

    this.addPlaylist = this.addPlaylist.bind(this);
  }

  componentDidMount(){
    axios.get('/api/playlists')
      .then(res => res.data)
      .then(playlists => this.setState({ playlists}))
  }

  addPlaylist(name) {
    console.log(`create playlist`, name)
    axios.post('/api/playlists', { name })
      .then(res => res.data)
      .then(playlist => {
        this.setState({ playlists: [...this.state.playlists, playlist]})
      });
  }


  render () {

    const playlists = this.state.playlists;
    const addPlaylist = this.addPlaylist;

    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={playlists}/>
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/new-playlist" render={()=> <NewPlaylist addPlaylist={addPlaylist} />} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={FilterableArtistsContainer} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
