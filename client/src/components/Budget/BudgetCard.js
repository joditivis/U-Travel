import React, { useState, useEffect }from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import Chart from './Chart';
import MoneySavedInput from './MoneySavedInput';
import './style.css';



const BudgetCard = props => {
console.log('trip', props.trip)

const [budgetTrip, setBudgetTrip] = useState([]);

useEffect(() => {
  console.log(props.flightTrip);
  let arr = [];
  if(props.flightTrip.amount !== 0){
    let newFlight = {
      title: props.flightTrip.title,
      amount: {$numberDecimal: (props.flightTrip.amount.$numberDecimal || 0)}
    }
    arr.push(newFlight);
  }

  

    console.log("HOTEL IS ADDED")
  if(props.hotelTrip.amount !== 0){
    let newHotel = {
      title: props.hotelTrip.title,
      amount: {$numberDecimal: (props.hotelTrip.amount.$numberDecimal || 0)}
    }
    arr.push(newHotel);
  }
   
  

  arr = [...arr, ...props.trip]
  console.log(arr);
  setBudgetTrip(arr);
}, [props])


  return (
    <div>
      <Card className='budget-card'>
        <CardHeader className='budget-header'>Trip Expenses</CardHeader>
            <CardBody>
               <Chart 
               trip={budgetTrip}/>

               <br></br>
               <hr></hr>
               <br></br>

              <Row>
                <Col lg={6}>
                  <h5 className='total-cost'>Total Trip Cost:</h5>
                  <h4 className="trip-cost">$6,470</h4>
                </Col>
                <Col lg={6}>
                  {/* <h5>Money Saved:</h5> */}
                  <MoneySavedInput tripId={props.tripId}/>
                </Col>
               </Row>
               <br></br>
               
            </CardBody>
      </Card>
    </div>
  );
}

export default BudgetCard;