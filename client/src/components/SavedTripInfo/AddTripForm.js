import React, { useState } from 'react';
// import React, { useReducer } from 'react';
import { Form, Button, Input } from 'reactstrap';

const AddTripForm = ({ addTrip }) => {
  const [title, setTitle] = useState('');
  const [peopleOrDays, setPeopleOrDays] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
    // addTrip(userInput);
    addTrip(title, peopleOrDays, amount);
    setTitle('');
    setPeopleOrDays('');
    setAmount('');
  };

  return (
    <Form>
      <Input
        type="text"
        name="title"
        placeholder="surfing lessons"
        value={title}
        onChange={event => setTitle(event.target.value)}
        // value={userInput.title}
        // onChange={handleChange}
      />
      <Input
        type="text"
        name="peopleOrDays"
        placeholder="people/days"
        value={peopleOrDays}
        onChange={event => setPeopleOrDays(event.target.value)}
      />
      <Input
        type="text"
        name="amount"
        placeholder="$"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
      <Button className="add-item-btn" size="sm" onClick={handleSubmit}>
        Add
      </Button>
    </Form>
  );
};

export default AddTripForm;
