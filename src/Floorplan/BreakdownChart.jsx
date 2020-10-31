import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import "../App.css";

const BreakdownChart = () => {
  const chartRef = createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    // =====================
    // ===== BREAKDOWN =====
    // =====================
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
                y: 10,
                r: 0,
              },
            ],
            backgroundColor: "#ff6384",
            hoverBackgroundColor: "#ff6384",
          },
          {
            label: "Den",
            data: [
              {
                x: 6,
                y: 0,
                r: 10,
              },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.7)",
            hoverBackgroundColor: "#ff6384",
          },
          {
            label: "Desk",
            data: [
              {
                x: 8.5,
                y: 8.5,
                r: 30,
              },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.7)",
            hoverBackgroundColor: "#ff6384",
          },
          {
            label: "Bedroom",
            data: [
              {
                x: 8,
                y: 4,
                r: 10,
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
            backgroundColor: "#ff6384",
            hoverBackgroundColor: "#ff6384",
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
      <canvas id="BubbleChart" ref={chartRef} />
    </div>
  );
};

export default BreakdownChart;
