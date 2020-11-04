import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getAllUserLocations } from "./fp-helpers";
import axios from "axios";
import BubbleChart from "./BreakdownChart.jsx";
import MarauderChart from "./MarauderChart.jsx";
import ClimateChart from "./ClimateChart.jsx";
import converter from '../SensorData/sensorHelpers.js';

const FloorplanCard = ({ activeToggle }) => {
  const [placeId, setPlaceId] = useState("");
  const [event, setEvent] = useState(false);
  const [data, setData] = useState([]);
  const [sensorReadings, setSensorReadings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const userLocation = await axios.get(
          "http://ec2-3-101-81-119.us-west-1.compute.amazonaws.com/locations"
        );
        console.log(userLocation);
        setPlaceId(userLocation.data.rows[0].place_id);
        setEvent(userLocation.data.rows[0].event);
      } catch (err) {
        console.log("Error getting location info", err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/sensor");
        setData(response.data.rows);
        console.log(response);
      } catch (err) {
        console.log("Error getting sensor data", err);
      }
    })();
  }, []);

  useEffect(() => {
    setSensorReadings(converter(data));
  }, [data]);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <div className="py-1">
          {activeToggle === "breakdown" ? (
            <BubbleChart />
          ) : activeToggle === "marauder" ? (
            <MarauderChart placeId={placeId} event={event} />
          ) : (
            <ClimateChart data={data} />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default FloorplanCard;
