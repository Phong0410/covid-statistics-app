import React from "react";
import { Container, Grid } from "@mui/material";
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
import LineChart from "./LineChart";
import { useSelector } from "react-redux";
import VerticalBarChart from "./VerticalBarChart";
import LoadingOverlay from "../LoadingOverlay";
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

const gridItemStyles = {
  margin: "auto",
  textAlign: "center",
};

const History = () => {
  const loading = useSelector((state) => state.history.loading);

  return (
    <Container sx={{ padding: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={gridItemStyles}>
          <LineChart />
        </Grid>
        <Grid item xs={4} sx={gridItemStyles}>
          <VerticalBarChart />
        </Grid>
      </Grid>
      <LoadingOverlay loading={loading} />
    </Container>
  );
};

export default History;
