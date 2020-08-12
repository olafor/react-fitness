import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LineChartOne from './line-chart-one';
import LineChartTwo from './line-chart-two';
import getShortDate from './date-handling';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Dashboard = () => {
  const [weightData, setWeightData] = useState([]);
  const [waistData, setWaistData] = useState([]);
  const [chestData, setChestData] = useState([]);

  const [weightMax, setWeightMax] = useState(100.0);
  const [weightMin, setWeightMin] = useState(80.0);

  const [circumferenceMax, setCircumferenceMax] = useState(115);
  const [circumferenceMin, setCircumferenceMin] = useState(85);

  const [weightField, setWeightField] = useState(97.0);
  const [waistField, setWaistField] = useState(100);
  const [chestField, setChestField] = useState(110);

  const handleWeightChange = (event) => {
    setWeightField(event.target.value);
  };

  const handleWaistChange = (event) => {
    setWaistField(event.target.value);
  };

  const handleChestChange = (event) => {
    setChestField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setWeightData((unchangedData) => [...unchangedData, {
      time: getShortDate(), value: weightField,
    }]);

    setWaistData((unchangedData) => [...unchangedData, {
      time: getShortDate(), value: waistField,
    }]);

    setChestData((unchangedData) => [...unchangedData, {
      time: getShortDate(), value: chestField,
    }]);
  };

  const classes = useStyles();

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
            max={circumferenceMax}
            min={circumferenceMin}
          />
        </Grid>
      </Grid>
      <div>
        <form className={classes.root}>
          <div>
            <TextField
              style={{
                marginTop: 0,
                backgroundColor: 'white',
              }}
              id="weight"
              type="number"
              variant="standard"
              size="small"
              color="primary"
              label="Enter Weight"
              value={weightField}
              onChange={handleWeightChange}
            />
            <TextField
              style={{
                marginTop: 0,
                backgroundColor: 'white',
              }}
              id="waist"
              type="number"
              variant="standard"
              size="small"
              color="primary"
              label="Enter Waist Measurement"
              value={waistField}
              onChange={handleWaistChange}
            />
            <TextField
              style={{
                marginTop: 0,
                backgroundColor: 'white',
              }}
              id="chest"
              type="number"
              variant="standard"
              size="small"
              color="primary"
              label="Enter Chest Measurement"
              value={chestField}
              onChange={handleChestChange}
            />
          </div>
        </form>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Add Metrics
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
