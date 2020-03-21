import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';
import './style.css';
  

const MoneySavedInput = props => {
  const [number1, setNumber1] = useState(0);
  const [total, setTotal] = useState(0);


function addNumber() {
  console.log(number1, total)
  const totalSaved = parseInt(number1) + total;

  setTotal(totalSaved);
}

    return (
      <Form className='add-money-input'>
        <Input
          type='text'
          placeholder='$0'
          className='input'
          value={number1}
          onChange={e => setNumber1(e.target.value)}
        />
        <br></br>
        <Button className='add-money-btn' size='sm' onClick={addNumber}>
          Add
        </Button>

        <br></br>
        <h2>${total}</h2>
      </Form>
    );
};

export default MoneySavedInput;