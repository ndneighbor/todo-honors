import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from 'react';
import TodoList from 'react';

window.id = 0;

class App extends Component {
  
  constructor(props){
  //this handles data entry
  super(props);
  //this handles state
  this.state = {
    data: []
    }
  
  }
//add
  addTodo(val){
    const todo = {text: val, id: window.id++}

    this.state.data.push(todo);

    this.setState({data: this.state(data)});
  }
//remove
  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });   

    this.setState({data: remainder}); 
  }
  
  render() {
    return (
     
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo</h2>
        </div>
        <div>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
          </div>

      </div>

      

    );
  }
}

export default App;
