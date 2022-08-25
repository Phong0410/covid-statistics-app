import React, { useState, forwardRef, useMemo } from "react";
import moment from "moment";
import { Container, Grid } from "@mui/material";

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
import { Line, Bar } from "react-chartjs-2";
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

const gridItemStyles = {
  margin: "auto",
  textAlign: "center",
};

const History = () => {
  const initialDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  }, []);

  const [date, setDate] = useState(initialDate);
  const history = useSelector((state) => state.history);

  const newCasesLabels = useMemo(() => {
    return history.data.map((item) => item.day);
  }, [history.data]);

  const newCasesData = {
    labels: newCasesLabels,
    datasets: [
      {
        label: "New cases",
        data: useMemo(
          () => history.data.map((item) => item.newCases),
          [history.data]
        ),
        borderColor: "rgb(252, 195, 5)",
        backgroundColor: "rgba(252, 195, 5, 0.3)",
      },
    ],
  };

  const newDeathsLabels = useMemo(
    () => history.data.map((item) => item.day),
    [history.data]
  );

  const newDeathsData = {
    labels: newDeathsLabels,
    datasets: [
      {
        label: "New deaths",
        data: useMemo(
          () => history.data.map((item) => item.newDeaths),
          [history.data]
        ),
        borderColor: "rgb(250, 71, 71)",
        backgroundColor: "rgba(250, 71, 71, 0.3)",
      },
    ],
  };

  const dateLabel = useMemo(
    () => moment(date).utc().format("YYYY-MM-DD"),
    [date]
  );
  const chosenDateData = history.data.find((item) => item.day === dateLabel);
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
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total deaths",
        data: [chosenDateData?.totalDeaths],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className={styles.calendarBtn}>
      {moment(value).utc().format("YYYY-MM-DD")}
    </button>
  ));

  const renderDayContents = (_, date) => {
    return <span>{moment(date).utc().format("D")}</span>;
  };

  return (
    <Container sx={{ padding: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={gridItemStyles}>
          <Line options={options} data={newCasesData} height="100px" />
          <Line options={options} data={newDeathsData} height="100px" />
        </Grid>
        <Grid item xs={4} sx={gridItemStyles}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default History;
