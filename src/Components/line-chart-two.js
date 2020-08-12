import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';

const LineChartTwo = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (props.data1.length > 0) {
      const temp = props.data1.concat(props.data2);
      const metrics = temp.map((data) => data.value);
      setMax(Math.max(...metrics) + 1);
      setMin(Math.min(...metrics) - 1);
    }
  }, [props.data1]);

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
                  labelString: 'cm',
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
  }, [props.data1, props.data2, max, min]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChartTwo;
