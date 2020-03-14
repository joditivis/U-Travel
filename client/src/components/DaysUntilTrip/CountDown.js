import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';

const CountDown = props => {

  return (
    <div>
      <Card className='countdown-card'>
        <CardHeader className='countdown-header'>Days Until Trip</CardHeader>
            <CardBody>
               <h2 className='countdown-num'>59</h2>              
            </CardBody>
      </Card>
    </div>
  );
}

export default CountDown;