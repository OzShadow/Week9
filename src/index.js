// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TaskOne from './Task-01-index';
// import TaskTwo from './Task-02-index';
// import TaskThree from './Task-03-index';
import TaskFour from './Task-04-index';

ReactDOM.render(
  <React.StrictMode>
    <TaskFour />
    {/* Render other tasks here */}
  </React.StrictMode>,
  document.getElementById('root')
);