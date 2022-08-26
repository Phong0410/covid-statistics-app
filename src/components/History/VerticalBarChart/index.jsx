import React, { useState, forwardRef, useMemo } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
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
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

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

const VerticalBarChart = () => {
  const initialDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  }, []);

  const [date, setDate] = useState(initialDate);
  const history = useSelector((state) => state.history);

  const dateLabel = useMemo(() => moment(date).format("YYYY-MM-DD"), [date]);
  const chosenDateData = history.data.find((item) => item.day === dateLabel);
  console.log(moment(date).format("YYYY-MM-DD"));
  const deathRate = [
    `Death rate: ${(
      (chosenDateData?.totalDeaths / chosenDateData?.totalCases) * 100 || 0
    ).toFixed(2)}%`,
  ];

  const deathRateData = {
    labels: deathRate,
    datasets: [
      {
        label: "Total cases",
        data: [chosenDateData?.totalCases],
        backgroundColor: "rgba(252, 195, 5, 0.5)",
      },
      {
        label: "Total deaths",
        data: [chosenDateData?.totalDeaths],
        backgroundColor: "rgba(250, 71, 71, 0.5)",
      },
    ],
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className={styles.calendarBtn}>
      {moment(value).format("YYYY-MM-DD")}
    </button>
  ));

  const renderDayContents = (_, date) => {
    return <span>{moment(date).format("D")}</span>;
  };
  return (
    <div className={styles.container}>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={(date) => {
          setDate(date);
        }}
        customInput={<CustomInput />}
        renderDayContents={renderDayContents}
      />
      <Bar options={options} data={deathRateData} height="400px" />
      {!chosenDateData && (
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-45%, -50%)",
            fontSize: "20px",
          }}
        >
          No data
        </Box>
      )}
    </div>
  );
};

export default VerticalBarChart;
