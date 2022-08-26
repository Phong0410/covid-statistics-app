import React from "react";

import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "react-datepicker/dist/react-datepicker.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const LineChart = () => {
  const history = useSelector((state) => state.history);

  const dayLabels = [];
  const newCases = [];
  const newDeaths = [];

  history.data.forEach((item) => {
    dayLabels.push(item.day);
    newCases.push(item.newCases);
    newDeaths.push(item.newDeaths);
  });

  const newCasesData = {
    labels: dayLabels,
    datasets: [
      {
        label: "New cases",
        data: newCases,
        borderColor: "rgb(252, 195, 5)",
        backgroundColor: "rgba(252, 195, 5, 0.3)",
      },
    ],
  };

  const newDeathsData = {
    labels: dayLabels,
    datasets: [
      {
        label: "New deaths",
        data: newDeaths,
        borderColor: "rgb(250, 71, 71)",
        backgroundColor: "rgba(250, 71, 71, 0.3)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={newCasesData} height="100px" />
      <Line options={options} data={newDeathsData} height="100px" />
    </div>
  );
};

export default LineChart;
