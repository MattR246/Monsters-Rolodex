import React, { Component } from 'react'; // OR REMOVE { Component }

import { CardList } from './Components/card-list/card-list-component';
import { SearchBox } from './Components/search-box/search-box.component';

import './App.css';

class App extends Component { // ADD React.Component Works cuz Component is a property of React
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange= e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    /*
    above line is destructured version of:
    const monsters = this.state.monsters;
    const searchField = this.state.searchField; 
    */
   const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  };
}

export default App;
