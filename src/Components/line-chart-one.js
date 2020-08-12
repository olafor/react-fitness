import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';

const LineChartOne = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (props.data.length > 0) {
      const weightProgression = props.data.map((data) => data.value);
      setMax(Math.max(...weightProgression) + 1);
      setMin(Math.min(...weightProgression) - 1);
    }
  }, [props.data]);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, {
        type: 'line',
        options: {
          scales: {
            yAxes: [
              {
                ticks: { max, min },
                scaleLabel: {
                  display: true,
                  labelString: 'kg',
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'time',
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
  }, [props.data, max, min]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChartOne;
