import { Card, CardContent, Grid, Typography } from "@mui/material";
import * as React from "react";
import Rating from "@mui/material/Rating";
import "./Review.css";

const Review = ({ review }) => {
  const { name, profession, description, rating } = review;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: "auto" }} className="review-design">
        <CardContent sx={{ height: "175px" }}>
          <Typography
            style={{ fontWeight: 500 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profession}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Rating name="disabled" value={parseInt(rating)} disabled />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
