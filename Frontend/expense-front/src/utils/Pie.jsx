"use client";
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Food", "Bills", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        data: [3000000, 2000000, 4000000, 5000000, 1000000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: true, // Hide the legend
        position: "right",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Hide the border of the arcs
      },
    },
  });

  return (
    <>
      <div className="w-full relative" style={{ width: "300px", height: "270px" }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default PieChart;