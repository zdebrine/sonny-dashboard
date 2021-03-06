const axios = require("axios");

const helpers = {
  toggleDevice: (command, callback) => {
      if (command === "turnOn") {
      axios
        .post(
          "https://maker.ifttt.com/trigger/light_on/with/key/dgBh4dmEyAY3T0mL5L1rk0",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => console.log('Device on'))
        .catch((err) => console.log(err));
    } else {
        axios
        .post(
          "https://maker.ifttt.com/trigger/light_on/with/key/dgBh4dmEyAY3T0mL5L1rk0",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => console.log('Device off'))
        .catch((err) => console.log(err));
    }
    return;
  },
};

module.exports = helpers;
