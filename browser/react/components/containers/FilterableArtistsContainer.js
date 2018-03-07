import React, { Component } from 'react';
import FilterInput from '../FilterInput';
import AllArtists from '../AllArtists';

export default class FilterableArtistsContainer extends Component {

  constructor(){
    super();
    this.state = {
      inputValue: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev){
    this.setState({ handleInput: this.ev.target.value });
  }

  render () {
    const inputValue = this.state.inputValue;
    console.log(`artists ${this.props.artists}`)
    // const filteredArtists = this.props.artists.filter( artist =>{
    //   artist.name.match(inputValue);
    // });
    return (
      <div>
        <FilterInput handleInput={this.handleInput}/>
        <AllArtists /*artists={filteredArtists}*/ />
      </div>
    )
  }
}
