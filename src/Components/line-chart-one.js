import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';

const LineChartOne = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, {
        type: 'line',
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  max: props.max,
                  min: props.min,
                },
              },
            ],
          },
        },
        data: {
          labels: props.data.map((d) => d.time),
          datasets: [
            {
              label: props.title,
              data: props.data.map((d) => d.value),
              fill: 'none',
              backgroundColor: props.color,
              pointRadius: 2,
              borderColor: props.color,
              borderWidth: 1,
              lineTension: 0,
            },
          ],
        },
      });
      setChartInstance(newChartInstance);
    }
  }, [props.data]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChartOne;
