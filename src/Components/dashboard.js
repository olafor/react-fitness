import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chart from './chart';

const Dashboard = () => (
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
        <Chart />
      </Grid>
      <Grid item md={4}>
        <Chart />
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
