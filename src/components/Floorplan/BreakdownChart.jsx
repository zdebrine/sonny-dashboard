import React, { useEffect, createRef, useState } from "react";
import {findAverages} from './fp-helpers.js' 
import Chart from "chart.js";
import "../App.css";

const BreakdownChart = (props) => {
  const chartRef = createRef();

  const [visitAvgs, setVisitAvgs] = useState([])

  useEffect(() => {
    setVisitAvgs(findAverages(props.metadata));
  }, []);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    
    // =====================
    // ===== BREAKDOWN =====
    // =====================

    new Chart(myChartRef, {
      type: "bubble",
      layout: {},
      data: {
        datasets: visitAvgs,
      },
      options: {
        onClick: (event) => {
          //console.log(event);
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
