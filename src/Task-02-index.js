// Task-02-index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TaskTwoContainer from './TaskTwoContainer';
import './index.css';

const TaskTwo = () => {
  // Define the contents of TaskTwo or perform other tasks.
  return (
    <React.StrictMode>
      <TaskTwoContainer />
    </React.StrictMode>
  );
}

ReactDOM.render(
  <TaskTwo />,
  document.getElementById('root')
);

export default TaskTwo;
