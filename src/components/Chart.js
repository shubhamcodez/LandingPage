import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css';
const data = {
  labels: ['Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2019',
          'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020','Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q2 2022', 
          'Q3 2022', 'Q4 2022', 'Q1 2022','Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023','Q1 2024','Q2 2024', 'Q3 2024', 'Q4 2024'],
  datasets: [
    {
      label: '$ mn',
      data: [100, 196, 219, 191, 279, 351, 562, 402, 395, 458, 599, 631, 751, 872, 501, 412, 671, 837, 914, 931,945, 1066, 1199, 1597, 1994, 2241, 2867, 4256, 6943, 6571],
      fill: false,
      backgroundColor: '#08bbfc',
      borderColor: '#08bbfc',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Revenues Chart</h1>
      <Line data={data} options={options} height='420' width='760'/>
    </div>
  </>
);

export default LineChart;