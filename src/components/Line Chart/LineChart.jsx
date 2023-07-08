import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import "./LineChart.css";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      fullSize: true,
      labels: {
        usePointStyle: true,
        padding: 20,
        boxHeight: 5,
      },
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["", "week1", "week2", "week3", "week4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guests",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: "#E9A0A0",
      backgroundColor: "#E9A0A0",
      tension: 0.5,
    },
    {
      label: "Users",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 500 })),
      borderColor: "#9BDD7C",
      backgroundColor: "#9BDD7C",
      tension: 0.5,
    },
  ],
};

const LineChart = () => {
  return (
    <div className="line-cont">
      <div className="line-graph">
        <div className="line-heading">Activities</div>
        <Line height={180} width={500} options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
