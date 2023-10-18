import React from 'react';
import '../styles/Task.css';
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({ text, completed }) => {
  return (
    <div 
      className={completed ? 'task-container completed' :'task-container'}
    >
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icon-container'>
        <BsFillTrashFill className='task-icon'/>
      </div>
    </div>
  )
}

export default Task