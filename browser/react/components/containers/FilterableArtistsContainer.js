import React, { Component } from 'react';
import FilterInput from '../FilterInput';
import AllArtists from '../AllArtists';
import axios from 'axios';

export default class FilterableArtistsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      artists: []
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data )
      .then(artists =>  this.setState({ artists }));
  }

  handleInput(ev){
    ev.preventDefault();
    this.setState({ inputValue: ev.target.value });
  }

  render () {
    const inputValue = this.state.inputValue;
    console.log(inputValue)
    const filteredArtists = this.state.artists.filter( artist =>
      artist.name.match(inputValue)
    );
    console.log('---->',filteredArtists)
    return (
      <div>
        <FilterInput handleInput={this.handleInput}/>
        <AllArtists artists={filteredArtists} />
      </div>
    )
  }
}
