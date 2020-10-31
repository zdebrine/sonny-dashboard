import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DeviceSwitch from "./switch.jsx";
import devices from "./devices.js";

const SideBar = () => {
  console.log(devices);
  return (
    <Grid container direction="row" className="sidebar">
      <Grid item xs={12}>
        <div className="p-2 mt-2">
          <img src="https://i.ibb.co/F0qJRbb/zt.png" alt="zt" border="0" />
        </div>
      </Grid>
      {devices.map(device => (
        <Grid item xs={12}>
          <div className="mt-5">
            <DeviceSwitch deviceInfo={device} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default SideBar;
