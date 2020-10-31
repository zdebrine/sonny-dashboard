import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import BubbleChart from "./BreakdownChart";
import MarauderChart from "./MarauderChart";
import ClimateChart from "./ClimateChart";

const FloorplanCard = ({ activeToggle }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={8}>
        <div className="py-3">
          {activeToggle === "breakdown" ? (
            <BubbleChart />
          ) : activeToggle === "marauder" ? (
            <MarauderChart />
          ) : (
            <ClimateChart />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default FloorplanCard;
