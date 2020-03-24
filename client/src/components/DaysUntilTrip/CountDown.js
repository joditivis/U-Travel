import React, { useState, useEffect, useInterval } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import DateInput from "./DateInput";
import moment from "moment";
import "./style.css";

const CountDown = () => {

  const [count, setCount] = useState({
    dateCountDown: ""
  });

  const [delay, setDelay] = useState(1000);

  // const dateCountDown = date;

  const handleInputChange = event => {
    console.log(typeof event);
    setCount({
      dateCountDown: event
    });
    setDelay(event)
  }

    // Set the date we're counting down to
    const dateCountDown = new Date("").getTime();
    

  useEffect(() => {

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        const tripDate = moment(dateCountDown, "MM/DD/YYYY").unix();
        //const tripDate = Math.round((new Date(`${dateCountDown} 00:00:00`)).getTime();
        console.log(typeof now, typeof tripDate);

        // Find the distance between now and the count down date
        const distance = tripDate - now;
        console.log(tripDate, now, distance);

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        if(document.getElementById("countdown-num") !== null){
          console.log("THIS IS HAPPENING");
          document.getElementById("countdown-num").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        // console.log(days);

        // If the count down is finished, display text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown-num").innerHTML = "Time to party";
        }
      };
    }, 1000, delay);
    return () => clearInterval(x);
 })

  return (
    <div>
      <Card className="countdown-card">
        <CardHeader className="countdown-header">Count Down</CardHeader>
            <CardBody>
              <Row>
                <Col lg={6}>
                  <h5 className="start-date-text">Vacation Start Date:</h5>
                  <DateInput handleInputChange={handleInputChange} />
                </Col>
                  {/* <hr></hr> */}
                <Col lg={6}>
                  <h5 className="countdown-text">Days Until Trip:</h5>
                  <p id="countdown-num"></p>
                </Col>
              </Row>
            </CardBody>
      </Card>
    </div>
  );
}

export default CountDown;