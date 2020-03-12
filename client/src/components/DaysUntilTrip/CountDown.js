import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';


const CountDown = props => {

  return (
    <div>
      <Card>
        <CardHeader>Days Until Trip</CardHeader>
            <CardBody>
               <h2>59</h2>              
            </CardBody>
      </Card>
    </div>
  );
}

export default CountDown;