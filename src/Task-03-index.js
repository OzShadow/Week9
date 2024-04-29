// Task-03-index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TaskThree from './TaskThree';
import Product from './Product';
import './index.css';

const bananaBread = new Product('Banana bread', 'Toasted with butter and cinnamon', 3.5);

ReactDOM.render(
  <React.StrictMode>
    <TaskThree product={bananaBread} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default TaskThree;
