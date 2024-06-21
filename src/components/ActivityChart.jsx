// src/components/ActivityChart.js
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const [metric, setMetric] = useState('Followers');

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: metric,
        data: [12000, 15000, 8000, 20000, 17000, 22000, 25000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activity Page',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleMetricChange = (event) => {
    setMetric(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Activity Page</h2>
        <div className="flex items-center">
          <span className="text-lg font-medium mr-2">Metric:</span>
          <select
            value={metric}
            onChange={handleMetricChange}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="Followers">Followers</option>
            <option value="Likes">Likes</option>
            <option value="Comments">Comments</option>
          </select>
        </div>
      </div>
      <div className="relative h-64 md:h-96 lg:h-128">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
