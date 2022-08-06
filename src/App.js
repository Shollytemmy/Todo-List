
import { useState } from 'react';

import { Form } from './conponents/Form';
import './App.css';
import { TodosList } from './conponents/TodosList';

function App() {
  const [input, updateInput] = useState('')
  const [todos, updateTodos] = useState([])
  console.log(todos)
  // handleClick func
  const handleClick = () => {
    if(input){

      const todoObject = {
      content: input,
      id: todos.length + 1,
      completed: false
    }

    updateTodos((prevTodos) => {
    return [...prevTodos, todoObject]
    })

    updateInput('')

    }
    

    
  }
  return (
    <div className="container">
      <Form input = {input} updateInput = {updateInput} handleClick = {handleClick}/>

      <div className="todos__list">
        <TodosList todos = {todos} />
      </div>

    </div>
  );
}

export default App;
