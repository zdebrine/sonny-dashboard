import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DeviceSwitch from "./switch.jsx";
import devices from "./devices.js";

const DeviceWidget = () => {
  return (
    <Grid container direction="row">
      {devices.map(device => (
        <Grid item xs={6} key={Math.random()}>
          <div className="card">
            <DeviceSwitch deviceInfo={device} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default DeviceWidget;
