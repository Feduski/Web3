import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      newTask: "",
    }
  }

  handleTaskChange = (event) =>{
    this.setState({
      newTask: event.target.value,
    })
  }
render(){
      return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <h1 className="title">
            Hello world <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <input onChange={this.handleTaskChange} type="text" className="new-task" size="40" placeholder="Ingrese un mensaje"/>
        <h3 className="test-label">{this.state.newTask}</h3>
        </div>
      </header>
    </div>
    );
}
}

export default App;
