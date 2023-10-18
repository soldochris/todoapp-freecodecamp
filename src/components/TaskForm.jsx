import React from 'react';
import '../styles/TaskForm.css';

const TaskForm = () => {
  return (
    <form className='task-form'>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  )
}

export default TaskForm