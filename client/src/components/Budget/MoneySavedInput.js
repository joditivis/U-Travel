import React, { useState } from 'react';
import { Form, Button, Input, Row, Col } from 'reactstrap';

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
      <Row>
      <Col md={8}>
      <Input
        type="text"
        placeholder="$"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      </Col>
      <Col md={4}>
      <Button className="add-money-btn" size="md" onClick={handleSubmit}>
        Submit
      </Button>
      </Col>
      </Row>
    </Form>
  );
};

export default MoneySavedInput;