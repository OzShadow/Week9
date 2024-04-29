// TaskThree component
import React from 'react';
import Product from './Product';

const TaskThree = ({ product }) => {
  const name = product ? product.name : 'No Name';
  const description = product ? product.description : 'No Description';
  const unitPrice = product ? product.unitPrice : 'No Price';

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name}</dd>
      <dt>Description:</dt>
      <dd>{description}</dd>
      <dt>Unit Price:</dt>
      <dd>{unitPrice}</dd>
    </dl>
  );
}

export default TaskThree;
