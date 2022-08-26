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
import VerticalBarChart from "./VerticalBarChart";
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
    </Container>
  );
};

export default History;
