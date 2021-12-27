import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

// Components you
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ''
    } 
  }

  componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));

      this.handlechange = this.handlechange.bind(this);
  };

  handlechange(e){
    this.setState({searchField: e.target.value})
  }  

  render() {

    const {monsters, searchField} = this.state;
    
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    console.log(filteredMonsters);

    return(
        <div className="App">

          <h1 className="monster__title">Monster Relodex</h1>

          <SearchBox 
            placeholder="Search Monster"
            handleChange={this.handlechange}
          />
          <CardList monsters={filteredMonsters}> </CardList>
        </div>
    )
  }
}

export default App;