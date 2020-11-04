import React, { useEffect, useState } from "react";
import axios from "axios";
import TempuratureChart from "./Tempurature/TempuratureChart.jsx";
import HumidityChart from "./Humidity/HumidityChart.jsx";
import Grid from "@material-ui/core/Grid";
import converter from "./sensorHelpers.js";

const SensorInfo = () => {
  const [data, setData] = useState([]);
  const [sensorReadings, setSensorReadings] = useState([]);

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
    <section>
      {data !== [] ? (
        data.map((sensor) => (
          <div className="p-3">
            <Grid container direction="row">
              <Grid item xs={6}>
                <TempuratureChart temp={sensor.temp} />
                <p className="pt-1">{sensor.room}</p>
              </Grid>
              <Grid item xs={6}>
                <HumidityChart humidity={sensor.humidity} />
                <p>{sensor.humidity}%</p>
              </Grid>
            </Grid>
          </div>
        ))
      ) : (
        <div>
          <h2>FETCHING SENSOR DATA</h2>
        </div>
      )}
    </section>
  );
};

export default SensorInfo;
