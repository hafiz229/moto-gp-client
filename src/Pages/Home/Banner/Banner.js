import { Button, Container, Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <Container
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      className="responsive-banner"
    >
      <Grid item style={{ textAlign: "left" }} xs={12}>
        <Typography variant="h3" sx={{ fontWeight: 500 }}>
          We Provide{" "}
          <Box
            variant="h3"
            sx={{
              color: "orange",
              display: "inline-block",
              fontWeight: 500,
            }}
          >
            Premium Bikes
          </Box>{" "}
          With High Quality
        </Typography>
        <Typography
          variant="h6"
          sx={{ my: 3, fontSize: 16, fontWeight: 300, color: "gray" }}
        >
          Our company was built by trust and reputation. We know how to make our
          customers love us by our high quality products with affordable prices.
          We promise to make you have the interesting experiences.
        </Typography>

        <NavLink to="/explore" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "orange",
            }}
          >
            Explore
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <img
            src="https://i.ibb.co/x6dmmsv/262-2622065-yellow-bajaj-pulsar-150-rs.png"
            alt=""
            style={{ width: "120%" }}
            // style={{ width: "368px", height: "350px" }}
          />
        </Box>
      </Grid>
      {/* <Grid container spacing={2}>
            <Grid
              item
              style={{ ...verticalCenter, textAlign: "left" }}
              xs={12}
              md={6}
            >
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 500 }}>
                  We Provide{" "}
                  <Box
                    variant="h3"
                    sx={{
                      color: "orange",
                      display: "inline-block",
                      fontWeight: 500,
                    }}
                  >
                    Premium Bikes
                  </Box>{" "}
                  With High Quality
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ my: 3, fontSize: 16, fontWeight: 300, color: "gray" }}
                >
                  Our company was built by trust and reputation. We know how to
                  make our customers love us by our high quality products with
                  affordable prices. We promise to make you have the interesting
                  experiences.
                </Typography>

                <NavLink to="/explore" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "orange",
                    }}
                  >
                    Explore
                  </Button>
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ my: 3 }} className="banner-img">
              <img
                style={{ verticalCenter }}
                src="https://i.ibb.co/x6dmmsv/262-2622065-yellow-bajaj-pulsar-150-rs.png"
                alt=""
              />
            </Grid>
          </Grid> */}
    </Container>
  );
};

export default Banner;
