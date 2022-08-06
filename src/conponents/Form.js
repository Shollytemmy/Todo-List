import React from 'react'

export const Form = ({input, updateInput, handleClick}) => {
  return (
    <>
    <h1 style={{textAlign: 'center'}}>ToDo List</h1>
      <div className='todo'>
        <input
         type="text"
          placeholder='Todos'
           className='input'
           value={input}
           onChange={(e) => updateInput(e.target.value)}
           />
        <div className="">
          <button className='cta' onClick={handleClick}>ADD</button>
        </div>
      </div>
    </>
  )
}
