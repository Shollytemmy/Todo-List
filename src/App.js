
import { useState } from 'react';

import { Form } from './conponents/Form';
import './App.css';
import { TodosList } from './conponents/TodosList';

function App() {
  const [input, updateInput] = useState('')
  const [todos, updateTodos] = useState([])
  const [checked, setChecked] = useState(false)
  console.log(checked)
  // handleClick func
  const handleClick = () => {
    if(input){

      const todoObject = {
      content: input,
      id: todos.length + 1,
      completed: checked
    }

    updateTodos((prevTodos) => {
    return [...prevTodos, todoObject]
    })

    updateInput('')

    }
    
  }

  const handleDelete = (id) => {
        
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        updateTodos(filteredTodos)

    }
  return (
    <div className="container">
      <Form input = {input} updateInput = {updateInput} handleClick = {handleClick}/>

      <div className="todos__list">
        <TodosList todos = {todos} handleDelete = {handleDelete} checked ={checked} setChecked={setChecked} />
      </div>

    </div>
  );
}

export default App;
