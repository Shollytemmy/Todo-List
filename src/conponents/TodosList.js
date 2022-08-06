import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

export const TodosList = ({todos}) => {

   
  return (
    <div className='list'>
      
            {
                todos.map((todo) => {
                    return(
                        <div className="list__todos" key={todo.id}>
                            <p>{todo.id}.  {todo.content}</p> <AiFillDelete style={{color: 'red', fontSize: '30px'}}/>

                        </div>
                    )
                })
            }
            

       
        
        
    </div>
    
  )
}


