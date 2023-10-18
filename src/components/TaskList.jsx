import React, { useState }from 'react';
import "../styles/TaskList.css";
import TaskForm from './TaskForm';
import Task from './Task';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task =>{
    console.log(task);
  };

  return (
    <>
      <TaskForm />
      <div className='task-list-container'>
        {
          tasks.map( (task) => 
            <Task 
              text={task.text}
              completed={task.completed}
            />
          )
        }
      </div>
    </>
  )
}

export default TaskList