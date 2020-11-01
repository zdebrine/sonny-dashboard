import React, { useEffect, createRef, useState } from "react";
import Chart from "chart.js";
import "../App.css";

// =====================
// ===== MARAUDER ======
// =====================

const MarauderChart = (props) => {
  const chartRef = createRef();
  const [zakPlaceId, setZakPlaceId] = useState(props.placeId);
  const [zakHere, setZakHere] = useState(false);

  useEffect(() => {
    if (props.event === "Location Event - Enter") {
      setZakHere(true);
    } else {
      setZakHere(false);
    }
  })

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "bubble",
      layout: {},
      data: {
        datasets: [
          {
            label: "Start",
            data: [
              {
                x: 0,
                y: 12,
                r: 0,
              },
            ],
            backgroundColor: "#ff6384",
            hoverBackgroundColor: "#ff6384",
          },
          {
            label: "Jake",
            data: [
              {
                x: 4.3,
                y: 1,
                r: 10,
              },
            ],
            backgroundColor: "#1d8cf8",
            hoverBackgroundColor: "#1d8cf8",
          },
          {
            label: "Nik",
            data: [
              {
                x: 3,
                y: 4,
                r: 10,
              },
            ],
            backgroundColor: "#1d8cf8",
            hoverBackgroundColor: "#1d8cf8",
          },
          {
            label: "Zak",
            data: [
              {
                x: 8.5,
                y: 11,
                r: 10,
              },
            ],
            backgroundColor: "#1d8cf8",
            hoverBackgroundColor: "#1d8cf8",
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
          },
        ],
      },
      options: {
        onClick: (event) => {
          console.log(event);
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  });

  return (
    <div id="myChart" className="pb-5">
      <canvas id="MarauderChart" ref={chartRef} />
    </div>
  );
};

export default MarauderChart;
