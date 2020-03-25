import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "reactstrap";
import "./style.css";
import Axios from "axios";

const MoneySavedInput = props => {
  const [number1, setNumber1] = useState(0);
  const [total, setTotal] = useState(0);
  const [tripIdTotal, setTripIdTotal] = useState(props.tripId);

  useEffect(() => {
    // console.log("Total HERE: ",props);
    setTripIdTotal(props.tripId);
    // console.log("total..", tripIdPack, props.tripId);
    if (props.tripId) {
      Axios.get(`/gettotal/${props.tripId}`).then(res => {
        setTotal(res.data.total);
      });
    }
  }, [props.tripId]);

  function addNumber() {
    // console.log(number1, total);
    const newTotal = parseInt(number1) + total;

    Axios.put(`/total/${props.tripId}`, {
      total: newTotal
    }).then(res => {
      setTotal(res.data.total);
      // setTotal(totalSaved);
    });
  }

  return (
    <Form className="add-money-input">
      <h5 className="money-saved">Money Saved:</h5>
      <h2 className="total-saved">${total}</h2>

      <Input
        type="text"
        placeholder="$0"
        className="input"
        value={number1}
        onChange={e => setNumber1(e.target.value)}
      />
      <br></br>
      <Button className="add-money-btn" size="sm" onClick={addNumber}>
        Add
      </Button>

      {/* <br></br>
        <h2>${total}</h2> */}
    </Form>
  );
};

export default MoneySavedInput;
