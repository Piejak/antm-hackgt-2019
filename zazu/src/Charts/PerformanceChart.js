import React from 'react';
import Chart from 'chart.js';
import Axios from 'axios';
import constants from '../constants.js';

// let testData = require('../exResponse.json');

class PerformanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.months = [
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

    this.posString = '';
    props.holdings.forEach(h => {
      this.posString += `${h.ticker}~${h.weight}|`
    });

    this.state = {
      startingCapital: props.capitalValue,
      date: props.date
    }

    this.performance = [];
    this.labels = [];

    this.data = null;

    this.createChart = this.createChart.bind(this)
    this.composeChart = this.composeChart.bind(this)
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

  composeChart() {
    this.performance = [];
    this.labels = [];
    console.log(this.state.date);
    let basePerformance = null;
    this.data.resultMap.PORTFOLIOS[0].portfolios[0].returns.performanceChart.forEach(h => {
      let d = new Date(h[0]);
      if (this.state.date == null) {
        this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
        this.performance.push(Math.round(h[1] * this.state.startingCapital * 100) / 100);
      } else if (d >= this.state.date) {
        if (basePerformance == null) {
          basePerformance = h[1];
        }
        this.labels.push(`${this.months[d.getMonth()]} ${d.getYear() + 1900}`);
        this.performance.push(Math.round(h[1] / basePerformance * this.state.startingCapital * 100) / 100);
      }
    });

    const ctx = document.getElementById('performanceChart');
    this.createChart(ctx);
  }

  componentDidMount() {
    if (this.data == null) {
      // Axios.get(`${constants.blackrockBase}${constants.portfolioAnalysisEndpoint}?calculatePerformance=true&positions=${this.posString}`,
      //   {
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Content-Type': 'application/json'
      //     },
      //     mode: 'no-cors'
      fetch(`${constants.blackrockBase}${constants.portfolioAnalysisEndpoint}?calculatePerformance=true&positions=${this.posString}`,
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      })
      .then((response) => {
        this.data = response;
        console.log(response);
        this.composeChart();
      });
    } else {
      this.composeChart();
    }
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