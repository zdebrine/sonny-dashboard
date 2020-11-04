const express = require("express");
const { toggleDevice } = require("./helpers.js");
const { pool } = require("./database/config.js");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const PORT = 9003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./build"));

// Requests here
app.post("/device", (req, res) => {
  toggleDevice(req.query.command);
  res.send();
});

app.get("/locations", (req, res) => {
  pool.query(
    "SELECT * FROM visits ORDER BY time DESC LIMIT 1;",
    (err, data) => {
      if (err) {
        console.log("There was an error getting the requested info", err);
        res.send();
      } else {
        res.status(200).send(data);
      }
    }
  );
});

app.post("/locations", (req, res) => {
  console.log(req.body);
  const body = req.body;
  let placeId = body.properties.beaconName;
  let time = body.originalTimestamp;
  let name = body.context.traits.name;
  let event = body.event;
  pool.query(
    `INSERT INTO visits (place_id, time, name, event) VALUES ('${placeId}', '${time}', '${name}', '${event}')`,
    (err, data) => {
      if (err) {
        console.log("There was an error posting the location", err);
        res.send(err);
      } else {
        console.log("Location posted");
        res.status(200).send(data);
      }
    }
  );
});

app.post("/sensor", (req, res) => {
  console.log(req.body);
  let name = req.body.beacon;
  let rssi = req.body.data.rssi;
  let humidity = req.body.data.humidity;
  let pressure = req.body.data.pressure;
  let temp = req.body.data.temperature;
  let accx = req.body.data.accelerationX;
  let accy = req.body.data.accelerationY;
  let accz = req.body.data.accelerationZ;
  let battery = req.body.data.battery;

  pool.query(
    `UPDATE "sensorData"
      SET rssi = ${rssi}, 
      temp = ${temp}, 
      humidity = ${humidity}, 
      pressure = ${pressure}, 
      accelerationx = ${accx}, 
      accelerationy = ${accy}, 
      accelerationz = ${accz}, 
      batery = ${battery} 
     WHERE name = '${name}'`,
    (err, data) => {
      if (err) {
        console.log("There was an error", err);
        res.send(err);
      } else {
        console.log("Posted to db");
        res.status(200).send(data);
      }
    }
  );
});

app.get("/sensor", (req, res) => {
  pool.query(`SELECT * FROM "sensorData"`, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});
