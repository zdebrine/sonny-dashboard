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
  convertSensor: (dataArr) => {
    console.log("data array in helper", dataArr);
    let array = [];
    let shade;
    array.push({
      label: "Start",
      data: [
        {
          x: 0,
          y: 12,
          r: 0,
        },
      ],
      backgroundColor: shade,
      hoverBackgroundColor: shade,
    });
    for (let i = 0; i < dataArr.length; i++) {
      let coordinates = [];
      let temp = dataArr[i].temp;
      console.log("temp in loop", temp);

      // SET COORDINATES

      if (dataArr[i].room === "Outside") {
        coordinates.push(3.3, 10);
      } else if (dataArr[i].room === "Office") {
        coordinates.push(8, 10);
      }

      // SET COLOR

      if (temp > 65 && temp < 79) {
        shade = "rgba(131, 255, 230, 0.7)";
      } else if (temp < 65) {
        shade = "rgba(62, 100, 255, 0.7)";
      } else {
        shade = "rgba(255, 95, 95, 0.7)";
      }

      // GENERATE DATA OBJECT

      array.push({
        label: dataArr[i].room,
        data: [
          {
            x: coordinates[0],
            y: coordinates[1],
            r: 50,
          },
        ],
        backgroundColor: shade,
        hoverBackgroundColor: shade,
      });
    }
    array.push({
      label: "End",
      data: [
        {
          x: 10,
          y: 0,
          r: 0,
        },
      ],
      backgroundColor: "#1d8cf8",
      hoverBackgroundColor: "#1d8cf8",
    });
    return array;
  },
};

module.exports = fpHelpers;
