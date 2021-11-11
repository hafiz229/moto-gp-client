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

const ExploreProduct = ({ exploreProduct }) => {
  const { name, description, img, price } = exploreProduct;
  return (
    <Grid item xs={12} sm={6} md={4}>
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
          <Button
            variant="contained"
            style={{ backgroundColor: "orange" }}
            size="small"
          >
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ExploreProduct;
