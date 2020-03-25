import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import DestinationInput from "./DestinationInput";
import "./style.css";
import Axios from "axios";

const DestinationCard = props => {
  const [destination, setDestination] = useState("");

  useEffect(() => {
    Axios.get(`/getdestination/${props.tripId}`).then(res => {
      setDestination(res.data.destination);
    });
  });

useEffect(()=>{

  Axios.get(`/getdestination/${props.tripId}`).then(res =>{
    setDestination(res.data.destination);
  })
    
});

function oneTimeReset(value){
  setDestination(value);
  props.oneTimeReset(value);
  
}

return (
    <div>
      <Card className='destination-card'>
        <CardHeader className='destination-header'>Destination</CardHeader>
            <CardBody>
              <DestinationInput destination={destination} tripId={props.tripId} oneTimeReset={oneTimeReset}/>
            </CardBody>

      </Card>
    </div>
  );
};

export default DestinationCard;
