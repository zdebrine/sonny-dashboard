import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import "../App.css";

// =====================
// ===== CLIMATE ======
// =====================

const ClimateChart = () => {
  const chartRef = createRef();

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
            label: "Outside",
            data: [
              {
                x: 3.3,
                y: 10,
                r: 200,
              },
            ],
            backgroundColor: "rgba(29, 140, 248, 0.7)",
            hoverBackgroundColor: "#1d8cf8",
          },
          {
            label: "Office",
            data: [
              {
                x: 8.5,
                y: 9.5,
                r: 100,
              },
            ],
            backgroundColor: "rgba(0, 242, 195, 0.7)",
            hoverBackgroundColor: "#00f2c3",
          },
          {
            label: "Bedroom",
            data: [
              {
                x: 8.5,
                y: 2,
                r: 70,
              },
            ],
            backgroundColor: "rgba(255, 141, 114, 0.7)",
            hoverBackgroundColor: "#ff8d72",
          },
          {
            label: "Den",
            data: [
              {
                x: 5.5,
                y: 2,
                r: 80,
              },
            ],
            backgroundColor: "rgba(255, 141, 114, 0.7)",
            hoverBackgroundColor: "#ff8d72",
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
      <canvas id="ClimateChart" ref={chartRef} />
    </div>
  );
};

export default ClimateChart;