const axios = require("axios");

const fpHelpers = {
  getAllUserLocations: () => {
    axios
      .get("/locations")
      .then((response) => {
          console.log(response);
        if (response.data.rows[0].event === "Location Event - Enter") {
          return {
            place_id: response.data.rows[0].place_id,
            here: true,
          };
        } else {
          return {
            place_id: null,
            here: false,
          };
        }
      })
      .catch((err) => console.error(err));
  },
};

module.exports = fpHelpers;