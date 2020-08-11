export const chartWeight = {
  type: 'line',
  data: {
    labels: ['29', '30', '31'],
    datasets: [
      {
        label: 'Change in Weight',
        data: [96, 96, 95],
        borderColor: 'red',
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: false,
      text: 'Some physical change',
    },
    scales: {
      yAxes: [
        {
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
            labelString: 'week',
          },
        },
      ],
    },
  },
};

export const chartCircumference = {
  type: 'line',
  data: {
    labels: ['27', '28', '29', '30'],
    datasets: [
      {
        label: 'Change in Chest',
        data: [110, 109, 110, 109],
        borderColor: 'red',
        borderWidth: 1,
      },
      {
        label: 'Change in Waist',
        data: [100, 99, 101, 100],
        borderColor: 'red',
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: false,
      text: 'Some physical change',
    },
    scales: {
      yAxes: [
        {
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
            labelString: 'week',
          },
        },
      ],
    },
  },
};
