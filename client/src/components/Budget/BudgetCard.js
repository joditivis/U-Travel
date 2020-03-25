import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Chart from "./Chart";
import MoneySavedInput from "./MoneySavedInput";
import "./style.css";

const BudgetCard = props => {
  const [budgetTrip, setBudgetTrip] = useState([]);
  const [expenses, setExpenses] = useState(0);
  const [moneySavedValue, setMoneySavedValue] = useState(0);
  const [moneySavedValueDisp, setMoneySavedValueDisp] = useState(0);

  useEffect(() => {
    let arr = [];
    if (props.flightTrip.amount !== 0) {
      let newFlight = {
        title: props.flightTrip.title,
        amount: { $numberDecimal: props.flightTrip.amount.$numberDecimal || 0 }
      };
      arr.push(newFlight);
    }

    if (props.hotelTrip.amount !== 0) {
      let newHotel = {
        title: props.hotelTrip.title,
        amount: { $numberDecimal: props.hotelTrip.amount.$numberDecimal || 0 }
      };
      arr.push(newHotel);
    }

    arr = [...arr, ...props.trip];
    setBudgetTrip(arr);
    let totalExpenses = 0;
    arr.forEach(element => {
      totalExpenses += parseFloat(element.amount.$numberDecimal);
    });
    setExpenses(totalExpenses);

    let diff = totalExpenses - moneySavedValue;
    setMoneySavedValueDisp(diff);
  }, [props, moneySavedValue]);

  function setMoneySaved(value) {
    setMoneySavedValue(value);
  }

  return (
    <div>
      <Card className="budget-card">
        <CardHeader className="budget-header">Trip Expenses</CardHeader>
        <CardBody>
          <Chart trip={budgetTrip} />

          <br></br>
          <hr></hr>
          <br></br>

          <Row>
            <Col lg={6}>
              <h5 className="total-cost">Total Trip Cost:</h5>
              <h4 className="trip-cost">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(expenses)}
              </h4>
              <h5 className="total-cost">Savings Needed:</h5>
              <h4 className="trip-cost">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(moneySavedValueDisp)}
              </h4>
            </Col>
            <Col lg={6}>
              {/* <h5>Money Saved:</h5> */}

              <MoneySavedInput
                tripId={props.tripId}
                setMoneySaved={setMoneySaved}
              />
            </Col>
          </Row>
          <br></br>
        </CardBody>
      </Card>
    </div>
  );
};

export default BudgetCard;
