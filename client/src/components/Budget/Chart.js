import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      // exportEnabled: true,
      backgroundColor: 'rgba(80, 80, 80, 0.06)',
      //theme: 'dark2', // "light1", "dark1", "dark2", "light2"
      // title: {
      //   text: 'Budget Chart',
      //   fontFamily: 'Pontano Sans, sans-serif',
      //   fontColor: 'white'
      // },
      data: [
        {
          type: 'pie',
          indexLabelPlacement: 'outside', //'inside' 
          // showInLegend: true,
          // legendText: "{label}",
          indexLabel: '{label}: {y}',
          indexLabelFontColor: 'rgba(255, 255, 255, 0.87)',
          indexLabelFontFamily: 'Pontano Sans, sans-serif',
          yValueFormatString: '$#,###.##',
          startAngle: -90,
          dataPoints: (this.props.trip || []).map(trip => ({
            label: trip.title,
            y: trip.amount
          }))
        }
      ]
    };

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
