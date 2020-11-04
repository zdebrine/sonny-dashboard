import React, { useEffect, createRef, useState } from "react";
import Chart from "chart.js";
import "../App.css";
import {convertSensor} from './fp-helpers.js';

// =====================
// ===== CLIMATE ======
// =====================

const ClimateChart = (props) => {
  const chartRef = createRef();

  const [sensorData, setSensorData] = useState(props.data);

  useEffect(() => {
    setSensorData(convertSensor(sensorData));
  }, [props.data]);
  

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "bubble",
      layout: {},
      data: {
        datasets: sensorData,
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
