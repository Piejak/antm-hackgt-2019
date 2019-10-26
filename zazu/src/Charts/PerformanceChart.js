import React from 'react';
import Chart from 'chart.js';

let testData = require('../exResponse.json');

class PerformanceChart extends React.Component {
  constructor(props) {
    super(props);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const startingCapital = props.capitalValue;

    this.performance = [];
    this.labels = [];
    // props.performance.forEach(h => {
    testData.resultMap.PORTFOLIOS[0].portfolios[0].returns.performanceChart.forEach(h => {
      let d = new Date(h[0]);
      this.labels.push(`${months[d.getMonth()]} ${d.getYear() + 1900}`);
      this.performance.push(Math.round(h[1] * startingCapital * 100) / 100);
    });

    this.createChart = this.createChart.bind(this)
  }

  createChart(ctx) {
    let color = null;
    if (this.performance[this.performance.length - 1] < 1) {
      color = '#ff7675';
    } else {
      color = '#55efc4';
    }
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Portfolio Performance',
            data: this.performance,
            fill: false,
            borderColor: color
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: true,
              maxRotation: 0,
              minRotation: 0
            }
          }],
          yAxes: [{
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return '$' + value;
              }
            }
          }]
        }
      }
    });
    return chart;
  }

  componentDidMount() {
    const ctx = document.getElementById('performanceChart');
    this.createChart(ctx);
  }

  render() {
    return (
      <div>
        <canvas id="performanceChart" width="400" height="200"></canvas>
      </div>
    );
  }
}

export default PerformanceChart;