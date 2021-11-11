import { Button, Container, Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              style={{ ...verticalCenter, textAlign: "left" }}
              xs={12}
              md={7}
            >
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 500 }}>
                  We Provide{" "}
                  <Typography
                    variant="h3"
                    sx={{
                      color: "orange",
                      display: "inline-block",
                      fontWeight: 500,
                    }}
                  >
                    Premium Bikes
                  </Typography>{" "}
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
            <Grid item xs={12} md={5} sx={{ my: 3 }}>
              <img
                style={{ verticalCenter, width: "500px" }}
                src="https://i.ibb.co/x6dmmsv/262-2622065-yellow-bajaj-pulsar-150-rs.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
