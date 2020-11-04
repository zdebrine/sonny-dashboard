const axios = require("axios");

const fpHelpers = {
  getAllUserLocations: () => {
    axios
      .get("/locations")
      .then((response) => {
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

  //===========================================================

  convertSensor: (dataArr) => {
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

  //===========================================================//

  findAverages: (metadata) => {
    let array = [];
    var officeRating = 50;
    var bedroomRating = 50;

    for (let i = 0; i < metadata.length; i++) {
      if (metadata[i].place_id === "208c53602be845b16c89000000000000") {
        bedroomRating += 2;
        officeRating -= 2;
      } else if (metadata[i].place_id === "4385395b88eb3dc1206d000000000000") {
        officeRating += 2;
        bedroomRating -= 2;
      }
    }
    array.push(
      {
        label: "Start",
        data: [
          {
            x: 0,
            y: 12,
            r: 0,
          },
        ],
      },
      {
        label: "Office",
        data: [
          {
            x: 8.5,
            y: 9.5,
            r: officeRating,
          },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        hoverBackgroundColor: "#ff6384",
      },
      {
        label: "Bedroom",
        data: [
          {
            x: 8.5,
            y: 3,
            r: bedroomRating,
          },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        hoverBackgroundColor: "#ff6384",
      },
      {
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
      }
    );
    return array;
  },
};

module.exports = fpHelpers;
