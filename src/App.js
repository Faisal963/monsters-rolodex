// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor () {
    super();
    /* this.state = {
      string:'Hello'
    }; */
    this.state = {
      developers: [
        {
          name: 'Max',
          id:'dev1'
        },
        {
          name: 'Jonty',
          id:'dev2'
        },
        {
          name: 'Nabil',
          id:'dev3'
        },
        {
          name: 'Darius',
          id:'dev4'
        }
      ],
      searchField:""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({developers: users }));
  }

  render() {
    const { developers, searchField } = this.state;
    const filteredDevelopers= developers.filter(
      developer => developer.name.toLowerCase().includes(
        searchField.toLowerCase()))
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="search developers" 
          onChange={e => this.setState({ searchField: e.target.value })}/>

        <CardList developers={filteredDevelopers}>
          
        </CardList>
      </div>
    );
  }
}

export default App;
/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'Hello Max'})}>
            Change Text
          </button>
        </header> */