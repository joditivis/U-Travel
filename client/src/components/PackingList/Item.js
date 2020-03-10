import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import './style.css';

const Item = ({ item, index, completeItem, removeItem }) => {
  return (
    <Form className="item-form">
      <FormGroup className="item">
        <Button
          className="item-button"
          size="sm"
          onClick={() => completeItem(index)}
        >
          Packed
        </Button>
        <div style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>
          {item.text}
        </div>

        <Button
          className="remove-button"
          size="sm"
          onClick={() => removeItem(index)}
        >
          <i className="fas fa-trash-alt"></i>
        </Button>
      </FormGroup>
    </Form>
  );
};

export default Item;
