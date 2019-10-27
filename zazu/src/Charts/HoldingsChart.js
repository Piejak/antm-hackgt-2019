import React from 'react';
import Chart from 'chart.js';
import {
  Aspect6
} from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office';

class HoldingsChart extends React.Component {
  constructor(props) {
    super(props);

    const colorMapping = {
      'Equity': '#00cec9',
      'Allocation': '#ff7675',
      'FixedIncome': '#a29bfe'
    }

    console.log(props.holdings);
    this.weights = [];
    this.holdings = [];
    this.colors = ['#00cec9', '#ff7675', '#dfe6e9', '#ffeaa7', '#fd79a8', '#636e72', '#a29bfe', '#55efc4',
      '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#d63031', '#e84393'];
    props.holdings.forEach(h => {
      this.weights.push(h.weight);
      this.holdings.push(h.description);
      // this.colors.push(colorMapping[h.assetClass]);
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
      },
      options: {
        plugins: {
          colorschemes: {
            scheme: Aspect6
          }
        }
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
      <div className = "HoldingsChart" >
        <canvas id="holdingChart" width="600" height="200"></canvas>
      </div>
    );
  }
}

export default HoldingsChart;