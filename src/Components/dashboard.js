import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import LineChartOne from './line-chart-one';
import LineChartTwo from './line-chart-two';
import getShortDate from './date-handling';

const Dashboard = () => {
  const [weightData, setWeightData] = useState([]);
  const [waistData, setWaistData] = useState([{ time: getShortDate(0), value: 100 },
  { time: getShortDate(10), value: 95 }]);
  const [chestData, setChestData] = useState([{ time: getShortDate(0), value: 110 },
  { time: getShortDate(10), value: 111 }]);
  const [numberField, setNumberField] = useState(97.0);
  const [weightMax, setWeightMax] = useState(100.0);
  const [weightMin, setWeightMin] = useState(80.0);

  const handleChange = (event) => {
    setNumberField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWeightData(unchangedData => [...unchangedData, {
      time: getShortDate(), value: numberField,
    }]);
  };

  return (
    <div align="center">
      <Grid
        container
        justify="center"
        spacing={10}
        style={{
          padding: '20px',
        }}
      >
        <Grid item md={4}>
          <LineChartOne
            data={weightData}
            title="weight"
            color="red"
            max={weightMax}
            min={weightMin}
          />
        </Grid>
        <Grid item md={4}>
          <LineChartTwo
            data1={waistData}
            title1="Waist"
            color1="red"
            data2={chestData}
            title2="Chest"
            color2="blue"
            max={115}
            min={85}
          />
        </Grid>
      </Grid>
      <div>
        <form>
          <TextField
            style={{
              marginTop: 0,
              backgroundColor: 'white',
            }}
            type="number"
            variant="standard"
            size="small"
            color="primary"
            label="Enter Weight"
            value={numberField}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Add today's weight
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
