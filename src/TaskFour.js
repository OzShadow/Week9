// TaskFour component
import React from 'react';

const TaskFour = () => {
  const products = [
    { name: 'Product 1', description: 'Description 1', unitPrice: 10 },
    { name: 'Product 2', description: 'Description 2', unitPrice: 20 },
    { name: 'Product 3', description: 'Description 3', unitPrice: 30 }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.unitPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskFour;
