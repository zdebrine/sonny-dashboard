import React, { useEffect, createRef } from "react";
import Chart from "chart.js";
import '../../App.css';

const HumidityChart = (props) => {
  const chartRef = createRef();

  const humidity = props.humidity;
  let shade;

  if (humidity > 15 && humidity < 50) {
    shade = "rgba(131, 255, 230, 0.7)"
  } else if (humidity < 15) { 
    shade = "rgba(255, 95, 95, 0.7)"
  } else {
    shade = "rgba(62, 100, 255, 0.7)"
  }


  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      layout: {},
      data: {
        
        datasets: [
          {
            label: "Humidity",
            data: [humidity, humidity, humidity],
            backgroundColor: [
              shade
            ],
            borderColor: [
              shade,
              shade,
              shade
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
