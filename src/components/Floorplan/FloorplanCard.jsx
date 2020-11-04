import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getAllUserLocations } from "./fp-helpers";
import axios from "axios";
import BubbleChart from "./BreakdownChart.jsx";
import MarauderChart from "./MarauderChart.jsx";
import ClimateChart from "./ClimateChart.jsx";
import converter from "../SensorData/sensorHelpers.js";

const FloorplanCard = ({ activeToggle }) => {
  const [placeId, setPlaceId] = useState("");
  const [event, setEvent] = useState(false);
  const [data, setData] = useState([]);
  const [sensorReadings, setSensorReadings] = useState([]);
  const [metadata, setMetadata] = useState(null);

  // ============================
  // == GET LATEST LOCATION DATA
  // ============================

  useEffect(() => {
    (async () => {
      try {
        const userLocation = await axios.get(
          "http://ec2-3-101-81-119.us-west-1.compute.amazonaws.com/locations"
        );
        setPlaceId(userLocation.data.rows[0].place_id);
        setEvent(userLocation.data.rows[0].event);
      } catch (err) {
        console.log("Error getting location info", err);
      }
    })();
  }, []);

  // =========================
  // == GET ALL SENSOR DATA
  // =========================

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/sensor");
        setData(response.data.rows);
      } catch (err) {
        console.log("Error getting sensor data", err);
      }
    })();
  }, []);

  // =========================
  // == GET ALL LOCATION DATA
  // =========================

  useEffect(() => {
    (async () => {
      try {
        const visitData = await axios.get("/visits/ALL");
        setMetadata(visitData.data.rows);
      } catch (err) {
        console.log("Error getting visit info", err);
      }
    })();
  }, []);

  // =========================
  // == CONVERT SENSOR DATA
  // =========================

  useEffect(() => {
    setSensorReadings(converter(data));
  }, [data]);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <div className="py-1">
          {activeToggle === "breakdown" ? (
            metadata !== null ? (
              <BubbleChart metadata={metadata} />
            ) : (
              <div> FETCHING DATA </div>
            )
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
