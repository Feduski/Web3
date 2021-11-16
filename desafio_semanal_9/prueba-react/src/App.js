import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      newTask: "",
      tasks: []
    }
  }

  handleTaskChange = (event) =>{
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTasks
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
        <form className="formOne" onSubmit={this.handleSubmit}>
            <input value={this.state.newTask} onChange={this.handleTaskChange}type="text" className="new-task" size="40" placeholder="Ingrese un mensaje"/>
        </form>
          {
            this.state.tasks.map((task)=>{
              return(
                <div className="task-container">
                  <h3 className="task">{task}</h3>
                </div>
              )
            })         
          }    
        <h3 className="test-label">{this.state.newTask}</h3>
        </div>
      </header>
    </div>
    );
}
}

export default App;
