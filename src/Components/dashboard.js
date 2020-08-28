import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LineChartOne from './line-chart-one';
import LineChartTwo from './line-chart-two';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const formatDate = (date) => date.toISOString().split('T')[0];

const Dashboard = () => {
  const [weightData, setWeightData] = useState([]);
  const [waistData, setWaistData] = useState([]);
  const [chestData, setChestData] = useState([]);

  const [weightField, setWeightField] = useState(97.0);
  const [waistField, setWaistField] = useState(100);
  const [chestField, setChestField] = useState(110);

  const [date, setDate] = useState(formatDate(new Date()));

  const handleWeightChange = (event) => {
    setWeightField(event.target.value);
  };

  const handleWaistChange = (event) => {
    setWaistField(event.target.value);
  };

  const handleChestChange = (event) => {
    setChestField(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setWeightData((unchangedData) => [...unchangedData, {
      time: date, value: parseFloat(weightField),
    }]);

    setWaistData((unchangedData) => [...unchangedData, {
      time: date, value: parseFloat(waistField),
    }]);

    setChestData((unchangedData) => [...unchangedData, {
      time: date, value: parseFloat(chestField),
    }]);
  };

  const classes = useStyles();

  return (
    <div align="center">
      <Grid
        container
        justify="center"
        spacing={4}
        style={{
          padding: '10px',
        }}
      >
        <Grid item md={6}>
          <LineChartOne
            data={weightData}
            title="weight"
            color="red"
          />
        </Grid>
        <Grid item md={6}>
          <LineChartTwo
            data1={waistData}
            title1="Waist"
            color1="red"
            data2={chestData}
            title2="Chest"
            color2="blue"
          />
        </Grid>
      </Grid>
      <div>
        <form className={classes.root}>
          <div style={{ paddingTop: '20px' }}>
            <TextField
              style={{
                marginTop: 0,
                backgroundColor: 'white',
              }}
              id="weight"
              type="number"
              InputProps={{
                inputProps: {
                  max: 200, min: 40,
                },
              }}
              variant="standard"
              size="small"
              color="primary"
              label="Enter Weight [kg]"
              value={weightField}
              onChange={handleWeightChange}
            />
            <TextField
              style={{
                marginTop: 0,
                backgroundColor: 'white',
              }}
              id="waist"
              InputProps={{
                inputProps: {
                  max: 200, min: 40,
                },
              }}
              type="number"
              variant="standard"
              size="small"
              color="primary"
              label="Enter Waist [cm]"
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
              InputProps={{
                inputProps: {
                  max: 200, min: 40,
                },
              }}
              variant="standard"
              size="small"
              color="primary"
              label="Enter Chest [cm]"
              value={chestField}
              onChange={handleChestChange}
            />
          </div>
          <TextField
            id="date"
            label="Enter Date"
            type="date"
            defaultValue={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Update Metrics
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
