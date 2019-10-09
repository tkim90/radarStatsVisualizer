import React from 'react';
import myChart from 'chart.js';
import styled from 'styled-components';

const color = 'rgba(33, 200, 81, 0.2)';

const ChartWrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid blue;
  text-align: right;
`;
  // float: left;

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
    var myRadarChart = new myChart(ctx, {
      type: 'radar',
      data: this.state.data,
      options: this.state.options
    });
  }

  render() {
    return (
      <ChartWrapper>
        <canvas width="100vw" height="100vh" id="myChart" />
      </ChartWrapper>
    );
  }
};

export default Chart;