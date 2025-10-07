import React from 'react';
import { Line } from 'react-chartjs-2';

export default function ChartCard({ title, data, labels }) {
  const chartData = {
    labels,
    datasets: [{
      label: title,
      data,
      borderColor: '#4e73df',
      backgroundColor: 'rgba(78, 115, 223, 0.2)',
      tension: 0.4
    }]
  };
  return <Line data={chartData} />;
}
