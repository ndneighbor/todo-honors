import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';
import axios from 'react';

window.id = 0;

const Title = ({todoCount}) => {
  return (
    <div>
       <div>
          <h1>to-do ({todoCount})</h1>
       </div>
    </div>
  );
}

class App extends Component {
  
  constructor(props){
  //this handles data entry
  super(props);
  //this handles state
  this.state = {
    data: []
    }
  this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }
//check API
componentDidMount(){
  axios.get(this.apiUrl)
  .then((res => {
    this.setState({data:res.data})
  }));
}



//add
  addTodo(val){
    const todo = {text: val, id: window.id++}
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }
//remove
  handleRemove(id){

    const remainder = this.state.data.filter((todo) => {
      return (todo.id !== id) 
    });   
    
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});      
      })
  }
  
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo</h2>
        </div>
             <div>
        <Title todoCount={this.state.data.length}/>
      
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
