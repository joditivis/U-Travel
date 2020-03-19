import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Chart from './Chart';
import MoneySavedInput from './MoneySavedInput';
import './style.css';



const BudgetCard = props => {
console.log('trip', props.trip)

  return (
    <div>
      <Card className='budget-card'>
        <CardHeader className='budget-header'><h4>Trip Expenses</h4></CardHeader>
            <CardBody>
               <h5>Total Trip Cost:</h5>
               <br></br>
               <h4 className="trip-cost">$6,470</h4>

               <hr></hr>

               <h5>Money Saved:</h5>
               <MoneySavedInput />
               <br></br>
               <hr></hr>

               <Chart 
               trip={props.trip}/>
               
            </CardBody>
      </Card>
    </div>
  );
}

export default BudgetCard;