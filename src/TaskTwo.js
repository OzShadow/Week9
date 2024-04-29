// TaskTwo component
import React from 'react';

const TaskTwo = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}

export default TaskTwo;
