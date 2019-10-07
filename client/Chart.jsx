import React from 'react';
import chartjs from 'chart.js';

const color = 'rgba(33, 200, 81, 0.2)';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: {
        labels: ['Memes', 'Accents', ['Drinking', 'Power'], 'Cooking', 'Sarcasm'],
        datasets: [{
          backgroundColor: color,
          borderColor: color,
          pointBackgroundColor: color,
          data: [14, 19, 6, 12, 18]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          pointLabels: {
            fontSize: 15
          },
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
  }

  componentDidMount() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: this.state.data,
      options: this.state.options
    });
  }

  render() {
    return <canvas height="70vh" id="myChart" />
  }
};

export default Chart;