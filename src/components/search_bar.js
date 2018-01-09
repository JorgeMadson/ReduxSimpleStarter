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
      //Aqui tenho uma função recebendo o event como parametro e
      //modificando o valor do state quando o evento onChange acontece
//Isso é um contolled component
      <div className="search-bar">
        <input
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
