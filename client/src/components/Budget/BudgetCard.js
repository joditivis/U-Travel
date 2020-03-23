import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import Chart from './Chart';
import MoneySavedInput from './MoneySavedInput';
import './style.css';



const BudgetCard = props => {
console.log('trip', props.trip)

  return (
    <div>
      <Card className='budget-card'>
        <CardHeader className='budget-header'>Trip Expenses</CardHeader>
            <CardBody>
               <Chart 
               trip={props.trip}/>

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
                  <MoneySavedInput />
                </Col>
               </Row>
               <br></br>
               
            </CardBody>
      </Card>
    </div>
  );
}

export default BudgetCard;