import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import Chart from './Chart';
import MoneySavedInput from './MoneySavedInput';


const BudgetCard = props => {

  return (
    <div>
      <Card>
        <CardHeader>Trip Expenses</CardHeader>
            <CardBody>
               <h5>Total Trip Cost:</h5>
               <h5>$4,286</h5>

               <br></br>
               <hr></hr>

               <Chart />

               <br></br>
               <hr></hr>
               <br></br>

               <h5>Money Saved:</h5>
               <MoneySavedInput />
               <p>*Amount will be subtracted from 
               <br></br>
               total amount needed for trip</p>
               
            </CardBody>
      </Card>
    </div>
  );
}

export default BudgetCard;