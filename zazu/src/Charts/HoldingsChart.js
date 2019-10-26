import React from 'react';
import Chart from 'chart.js';

class HoldingsChart extends React.Component {
  constructor(props) {
    super(props);

    const colorMapping = {
      'Equity': '#00cec9',
      'Allocation': '#ff7675',
      'FixedIncome': '#a29bfe'
    }

    this.weights = [];
    this.holdings = [];
    this.colors = [];
    props.holdings.forEach(h => {
      this.weights.push(h.weight);
      this.holdings.push(h.description);
      this.colors.push(colorMapping[h.assetClass]);
    });

    this.createChart = this.createChart.bind(this)
  }

  createChart(ctx) {
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.weights,
          backgroundColor: this.colors
        }],
        labels: this.holdings
      }
    });
    return chart;
  }

  componentDidMount() {
    const ctx = document.getElementById('holdingChart');
    this.createChart(ctx);
  }

  render() {
    return (
      <div>
        <canvas id="holdingChart" width="400" height="200"></canvas>
      </div>
    );
  }
}

export default HoldingsChart;