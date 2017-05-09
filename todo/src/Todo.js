// eslint-disable-next-line
import React from 'react';

const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={remove(todo.id)} >{todo.text}</li>);
}

export default Todo;