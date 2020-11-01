import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getAllUserLocations } from "./fp-helpers";
import axios from 'axios';
import BubbleChart from "./BreakdownChart.jsx";
import MarauderChart from "./MarauderChart.jsx";
import ClimateChart from "./ClimateChart.jsx";

const FloorplanCard = ({ activeToggle }) => {
  const [placeId, setPlaceId] = useState("");
  const [event, setEvent] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const userLocation = await axios.get('/locations');
        setPlaceId(userLocation.data.rows[0].place_id);
        setEvent(userLocation.data.rows[0].event);
      } catch (err) {
        console.log("Error getting location info", err);
      }
    })();
  }, []);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <div className="py-1">
          {activeToggle === "breakdown" ? (
            <BubbleChart />
          ) : activeToggle === "marauder" ? (
            <MarauderChart placeId={placeId} event={event} />
          ) : (
            <ClimateChart />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default FloorplanCard;
