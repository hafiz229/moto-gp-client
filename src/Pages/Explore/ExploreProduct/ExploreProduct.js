import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ExploreProduct.css";

const ExploreProduct = ({ exploreProduct }) => {
  const { _id, name, description, img, price } = exploreProduct;
  return (
    <Grid item xs={12} sm={6} md={4} className="explore-design">
      <Card sx={{ maxWidth: "auto" }}>
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="green iguana"
        />
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
            {description}
          </Typography>
          <br />
          <Typography variant="h6" color="text.primary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "orange" }}
              size="small"
            >
              Buy Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ExploreProduct;
