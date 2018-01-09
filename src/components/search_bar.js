import React, { Component } from 'react';

class SearchBar  extends Component {
//o contrutor é necessário para inicializar o 'state'
//todo component tem state
  constructor(props){
  super(props);

  this.state = { term: '' };
}
  render() {
    return (
      <div className="search-bar form-group">
        <input className="form-control" placeholder="Pesquise..."
        value  = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
