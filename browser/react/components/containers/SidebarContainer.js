import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';

export default class SidebarContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    console.log('------->');
    axios.get('/api/playlists')
      .then(res => res.data)
      .then(playlists => {
      console.log('Sidebar',playlists) // response json from the server!
      this.setState({ playlists: playlists })
    });
  };
  
  

  render(){
    console.log(this)
    return(
      <Sidebar playlists={this.state.playlists}/>
    )
  }

}
