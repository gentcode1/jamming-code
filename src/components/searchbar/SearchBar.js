import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
      term:''
    }
    this.search= this.search.bind(this);
    this.handleTermChange= this.handleTermChange.bind(this)
  }

  search(){
      this.props.onSearch(this.props.term)
  }
  handleTermChange(e){
    this.setState({term: e.target.value})
  }
    render() {
        return (
          <div class="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
            <button class="SearchButton" >SEARCH</button>
          </div>
        );
    }
}
