import React from "react";
import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const GameContainer = ({ title, desc, playtestingLink }) => {
  return (
    <Grid container gap={10}>
      <Grid item xl={4}>
        <Skeleton width={"100%"} height={500} />
      </Grid>
      <Grid
        item
        xl={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight={900}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {desc}
        </Typography>
        <Button
          variant="contained"
          color="error"
          endIcon={<ArrowRightAltRounded />}
        >
          <Link
            to={playtestingLink}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Playtesting
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default GameContainer;
