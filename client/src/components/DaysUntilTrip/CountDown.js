import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';

const CountDown = () => {

// Set the date we're counting down to
let countDownDate = new Date("April 5, 2020 15:37:25").getTime();

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
  document.getElementById("countdown-num").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-num").innerHTML = "Time to party";
  }
}, 1000);

  return (
    <div>
      <Card className='countdown-card'>
        <CardHeader className='countdown-header'>Days Until Trip</CardHeader>
            <CardBody>
               <h2 id='countdown-num'></h2>              
            </CardBody>
      </Card>
    </div>
  );
}

export default CountDown;