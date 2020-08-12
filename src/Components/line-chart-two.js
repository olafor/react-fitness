import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';

const LineChartTwo = (props) => {
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
          labels: props.data1.map((d) => d.time),
          datasets: [
            {
              label: props.title1,
              data: props.data1.map((d) => d.value),
              fill: 'none',
              backgroundColor: props.color1,
              pointRadius: 2,
              borderColor: props.color1,
              borderWidth: 1,
              lineTension: 0,
            },
            {
              label: props.title2,
              data: props.data2.map((d) => d.value),
              fill: 'none',
              backgroundColor: props.color2,
              pointRadius: 2,
              borderColor: props.color2,
              borderWidth: 1,
              lineTension: 0,
            },
          ],
        },
      });
      setChartInstance(newChartInstance);
    }
  }, [props.data1, props.data2]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChartTwo;
