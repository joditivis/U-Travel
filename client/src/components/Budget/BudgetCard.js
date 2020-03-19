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
               <h5 className="trip-cost">$4,286</h5>

               <hr></hr>

               <Chart 
               trip={props.trip}/>

               <br></br>
               <hr></hr>
               <br></br>

               <h5>Money Saved:</h5>
               <MoneySavedInput />
               <br></br>
               <p>*Amount will be subtracted from 
               <br></br>
               total amount needed for trip</p>
               
            </CardBody>
      </Card>
    </div>
  );
}

export default BudgetCard;