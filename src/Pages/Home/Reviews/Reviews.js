import { Container, Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-waters-58275.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#F5F6F7" }}>
      <Box sx={{ flexGrow: 1, py: 5 }}>
        <Container>
          <Typography
            sx={{ fontWeight: 600, m: 2 }}
            variant="h4"
            component="div"
          >
            Customer Reviews
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ textAlign: "left" }}
          >
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Reviews;
