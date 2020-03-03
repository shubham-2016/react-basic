import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
//import logo from './logo.svg';
//import { render } from '@testing-library/react';
import Main from './components/main.jsx';

class App extends Component {

  state = {  
    counters: [
      {id:1, value:1},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ],
    tag: ['tag1','tag2','tag3']
  }

  handleReset = () => {    
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });    

    this.setState({ counters});
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters:counters });
  };

  handledIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
  };

  render(){
    return (
      <React.Fragment>
        <NavBar countersLength = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Main 
            counters = {this.state.counters}
            handleReset = {this.handleReset} 
            handleDelete = {this.handleDelete}
            handledIncrement = {this.handledIncrement}
            tags = {this.state.tag}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;