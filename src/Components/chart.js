import React, { useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';

const chartConfig = {
  type: 'line',
  data: {
    labels: ['27', '28', '29', '30'],
    datasets: [
      {
        label: 'example',
        data: [97, 96, 96, 95],
        borderColor: 'red',
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Some physical change',
    },
  },
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
