
import { useState } from 'react';

import { Form } from './conponents/Form';
import './App.css';

function App() {
  const [input, updateInput] = useState('')
  const [todos, updateTodos] = useState([])
  console.log(todos)
  // handleClick func
  const handleClick = () => {
    const todoObject = {
      content: input,
      id: todos.length + 1,
      completed: false
    }

    updateTodos((prevTodos) => {
    return [...prevTodos, todoObject]
    })
  }
  return (
    <div className="container">
      <Form input = {input} updateInput = {updateInput} handleClick = {handleClick}/>

    </div>
  );
}

export default App;
