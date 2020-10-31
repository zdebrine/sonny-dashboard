import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import '../../App.css';

const HumidityChart = () => {
  const chartRef = createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      layout: {},
      data: {
        labels: ["12am", "4am", "8am", "12pm", "4pm", "8pm"],
        datasets: [
          {
            label: "Humidity",
            data: [20, 20, 15, 35, 45, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <div className="py-5">
      <canvas id="LineChart" ref={chartRef} />
    </div>
  );
};

export default HumidityChart;
