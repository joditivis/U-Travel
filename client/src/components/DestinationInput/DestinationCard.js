import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import DestinationInput from './DestinationInput';
import './style.css';
import Axios from 'axios';

const DestinationCard = (props) => {
  console.log(props);
console.log("dest card trip: ", props.tripId);

const [destination, setDestination] = useState('')

useEffect(()=>{
  
  Axios.get(`/getdestination/${props.tripId}`).then(res =>{
    setDestination(res.data.destination);
    console.log(res.data);
  })
    
});


return (
    <div>
      <Card className='destination-card'>
        <CardHeader className='destination-header'>Destination</CardHeader>
            <CardBody>
              <DestinationInput destination={destination} tripId={props.tripId} />
            </CardBody>
      </Card>
    </div>
  );
}

export default DestinationCard;