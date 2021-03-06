import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "lime", paddingBottom: "10px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            color: "black",
          }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
            <Box>
              <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                Quick Links
              </Typography>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                <Button color="inherit">Register</Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/explore"
              >
                <Button color="inherit">Explore</Button>
              </NavLink>
              <br />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h4" style={{ fontWeight: "bolder" }}>
                <img
                  style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                  alt=""
                  src="https://i.ibb.co/1Q6vQ9R/37-372579-motogp-logo-background-1-hd-wallpapers-moto-gp.jpg"
                />{" "}
                MotoGP
              </Typography>
              <Typography
                variant="small"
                style={{ color: "black", fontWeight: "300" }}
              >
                MotoGP #1 motorcycle selling website in Bangladesh where Bike
                enthusiasts from all over the country can find all the top
                quality bikes. From motorcycle price in Bangladesh and
                Motorcycle Specification to the test ride reviews of various
                bikes and first impression reviews of any newly launched bikes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="small"
          style={{ color: "black", fontWeight: "500" }}
        >
          Copyright ?? 2024 All Rights Reserved by MotoGP
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
