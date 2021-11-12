import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const MyOrder = ({ myOrder, handleDelete }) => {
  const { _id, name, email, order, price, address, phone, status } = myOrder;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: "auto" }}>
        <CardContent sx={{ height: "350px" }}>
          <Typography
            style={{ fontWeight: 500 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {order}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
          <br />
          <Typography variant="h6" color="red">
            {status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "orange", marginBottom: "10px" }}
            size="small"
            onClick={() => handleDelete(_id)}
          >
            Cancel Order
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MyOrder;
