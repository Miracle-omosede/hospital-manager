import React, { useEffect } from 'react'
import Chart from 'chart.js';

function AnalyticChart() {
    useEffect (() => {
        const canvas = document.getElementById("chart").
        getContext('2d');

        // make Api request 
        window.myLine = new Chart(canvas, {
          type: "line",
          data: {
            labels: [
              "Jan 22",
              "Jan 23",
              "Jan 24",
              "Jan 25",
              "Jan 26",
              "Jan 27",
            ],
          },

          datasets: [
            {
              label: "Men"
            },
            {
              label: "Women"
            },
            {
              label: "Everyone"
            },
          ],

          // datasets: [
          //   {
          //     label: "Men",
          //     data: [0, 5, 3, 4, 5],
          //     borderColor: "#ffbc6d",
          //     backgroundColor: "#fdf3e9",
          //     borderRadius: "15px",
          //   },
          //   {
          //     label: "Women",
          //     data: [0, 5, 3, 4, 5],
          //     borderColor: "#aee6d9",
          //     backgroundColor: "#f0f5fb",
          //     borderRadius: "15px"
          //   },
          //   {
          //     label: "everyone",
          //     data: [0, 3, 3, 4, 5],
          //     borderColor: "#b494ff",
          //     backgroundColor: "#e7e1fb",
          //     borderRadius: "15px"
          //   },
          // ],
          options: {
            maintainAspectRatio: false,
            responsive: true,
          },
        });
    },[])
  return (
    <div>
        <canvas id='chart'></canvas>
    </div>
  )
}

export default AnalyticChart