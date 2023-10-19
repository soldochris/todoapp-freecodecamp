import React from 'react';
import '../styles/Task.css';
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
  return (
    <div 
      className={completed ? 'task-container completed' :'task-container'}
    >
      <div 
        className='task-text'
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <div 
      className='task-icon-container'
      onClick={()=> deleteTask(id)}
      >
        <BsFillTrashFill className='task-icon'/>
      </div>
    </div>
  )
}

export default Task