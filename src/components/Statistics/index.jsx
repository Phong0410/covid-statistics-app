import React from "react";
import { Container, Stack, Paper, styled, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import AnimatedNumber from "animated-number-react";
import styles from "./index.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const gridItemStyles = {
  margin: "auto",
  textAlign: "center",
};

const formatValue = (value) => value.toFixed(0);

const Statistic = () => {
  const data = useSelector((state) => state.statistics);
  return (
    <Container sx={{ padding: "24px" }}>
      <Stack spacing={2}>
        <Item>
          <p className={styles.title}>Cases</p>
          <Grid container spacing={1}>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>New</p>
              <AnimatedNumber
                className={`${styles.number} ${
                  data.cases.new ? styles.yellow : ""
                }`}
                value={data.cases.new}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>Active</p>
              <AnimatedNumber
                className={styles.number}
                value={data.cases.active}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>Critical</p>
              <AnimatedNumber
                className={`${styles.number} ${
                  data.cases.critical ? styles.red : ""
                }`}
                value={data.cases.critical}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>Recovered</p>
              <AnimatedNumber
                className={`${styles.number} ${
                  data.cases.recovered ? styles.green : ""
                }`}
                value={data.cases.recovered}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>Total</p>
              <AnimatedNumber
                className={styles.number}
                value={data.cases.total}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
          </Grid>
        </Item>
        <Item>
          <p className={styles.title}>Deaths</p>
          <Grid container spacing={1}>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>New</p>
              <AnimatedNumber
                className={`${styles.number} ${
                  data.deaths.new ? styles.red : ""
                }`}
                value={data.deaths.new}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <p>Total</p>
              <AnimatedNumber
                className={styles.number}
                value={data.deaths.total}
                formatValue={formatValue}
                duration={500}
              />
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Container>
  );
};

export default Statistic;
