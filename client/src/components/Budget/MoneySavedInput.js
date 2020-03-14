import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';
import './style.css';

const MoneySavedInput = ({ subtractMoneySaved }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    subtractMoneySaved(value);
    setValue('');
  };

  return (
    <Form className="add-money-input">
      <Input
        type="text"
        placeholder="$"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <br></br>
      <Button className="add-money-btn" size="md" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default MoneySavedInput;