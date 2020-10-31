import React from "react";
import TempuratureChart from "./Tempurature/TempuratureChart.jsx";
import HumidityChart from "./Humidity/HumidityChart.jsx";
import Grid from "@material-ui/core/Grid";

const SensorInfo = () => {
  return (
    <div className="p-3">
      <Grid container direction="row">
        <Grid item xs={6}>
          <TempuratureChart />
          <p className="pt-1">Office</p>
        </Grid>
        <Grid item xs={6}>
          <HumidityChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default SensorInfo;
