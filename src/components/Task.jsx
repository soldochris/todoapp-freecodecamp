import React from 'react';
import '../styles/Task.css';
import { BsFillTrashFill } from 'react-icons/bs';

const Task = ({ text }) => {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icon'>
        <BsFillTrashFill />
      </div>
    </div>
  )
}

export default Task