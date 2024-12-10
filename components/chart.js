// components/Chart.js
"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  // Dados do gráfico
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        data: [1, 5, 10, 25, 50, 75, 100, 250, 500, 600, 800, 1000],
        borderColor: 'rgba(49, 130, 206, 1)',
        backgroundColor: 'rgba(49, 130, 206, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.4, // Suaviza as linhas
        pointStyle: false,
        hitRadius: 100,
      }
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#fff',
          padding: 20,
          font: {
            size: 12,
            family: 'whitney',
            weight: '600',
          },
        },
      },
      y: {
        border: { dash: [5, 5], width: 0 },
        ticks: {
          color: '#fff',
          padding: 20,
          minTicksLimit: 5,
          maxTicksLimit: 10,
          font: {
            size: 12,
            family: 'whitney',
            weight: '600',
          },
        },
        grid: { drawTicks: false, color: '#4A5568' },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(38, 130, 206, 0.5)',
        titleAlign: 'center',
        titleFont: { size: 12, family: 'whitney', weight: '600' },
        displayColors: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
