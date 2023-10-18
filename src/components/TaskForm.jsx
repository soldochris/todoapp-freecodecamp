import React, { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = () => {

  const [input, setInput] = useState('');

  const handleChange = event =>{
    setInput(event.target.value);
    console.log(event.target.value);

  };

  const handleSubmit = event => {
    const newTask = {
      id: '',
      text: ''
    }
  };

  return (
    <form className='task-form'>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  )
}

export default TaskForm