import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      // exportEnabled: true,
      theme: 'dark1', // "light1", "dark1", "dark2"
      title: {
        text: 'Budget Chart'
      },
      data: [
        {
          type: 'pie',
          indexLabel: '{label}: {y}%',
          startAngle: -90,
          dataPoints: (this.props.trip || []).map(trip => ({
            label: trip.title,
            y: trip.amount
          }))
        }
      ]
    };

    // { y: 20, label: "Flights" },
    // { y: 24, label: "Hotel" },
    // { y: 20, label: "Food & Drinks" },
    // { y: 14, label: "Rental Car" },
    // { y: 12, label: "Activities" },
    // { y: 10, label: "Misc" }

    return (
      <div>

				
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Chart;
