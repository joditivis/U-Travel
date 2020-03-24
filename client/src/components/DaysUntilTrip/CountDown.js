import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import DateInput from './DateInput';
import './style.css';

const CountDown = () => {

    // Set the date we're counting down to
    let countDownDate = new Date('03/23/2020').getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      if(document.getElementById("countdown-num") !== null){
        document.getElementById("countdown-num").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, display text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-num").innerHTML = "Time to party";
      }
    };
  }, 1000);

  return (
    <div>
      <Card className='countdown-card'>
        <CardHeader className='countdown-header'>Count Down</CardHeader>
            <CardBody>
              <Row>
                <Col lg={6}>
                  <h5 className='start-date-text'>Vacation Start Date:</h5>
                  <DateInput />
                </Col>
                  {/* <hr></hr> */}
                <Col lg={6}>
                  <h5 className='countdown-text'>Days Until Trip:</h5>
                  <p id='countdown-num'></p>
                </Col>
              </Row>
            </CardBody>
      </Card>
    </div>
  );
}

export default CountDown;