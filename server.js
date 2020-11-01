const express = require('express');
const { toggleDevice } = require('./helpers.js');
const {pool} = require('./location-database/config.js')

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
const PORT = 9003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./build'));

// Requests here
app.post('/device', (req, res) => {
  toggleDevice(req.query.command);
  res.send()
});

app.get('/locations', (req, res) => {
  pool.query("SELECT * FROM visits ORDER BY time DESC LIMIT 1;", (err, data) => {
    if (err) {
      console.log('There was an error getting the requested info', err);
      res.send();
    } else {
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});