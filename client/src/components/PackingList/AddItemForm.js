import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';

const AddItemForm = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue('');
  };

  return (
    <Form className="add-item-input">
      <Input
        type="text"
        placeholder="Add Item"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button className="add-item-btn" size="sm" onClick={handleSubmit}>
        Add Item
      </Button>
    </Form>
  );
};

export default AddItemForm;
