import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import "./Booking.css";

const Booking = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuth();
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const onSubmit = (data) => {
    axios
      .post("https://afternoon-waters-58275.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Product Order Placed Successfully");
          reset();
        }
      });
  };
  console.log(user);
  useEffect(() => {
    fetch(`https://afternoon-waters-58275.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <div>
      <Navigation></Navigation>
      <h2>{user.displayName}, Welcome to Purchase Page</h2>
      <Container>
        <Card
          sx={{
            maxWidth: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          <CardMedia
            component="img"
            height="350"
            image={product.img}
            alt="green iguana"
          />
          <CardContent sx={{ height: "175px" }}>
            <Typography
              style={{ fontWeight: 500 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <br />
            <Typography variant="h6" color="text.primary">
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <div
        className="add-booking"
        style={{ maxWidth: "90%", marginLeft: "auto", marginRight: "auto" }}
      >
        <h2>Place Order Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.displayName}
            {...register("name", { required: true })}
          />
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          <input
            defaultValue={product.name}
            {...register("order", { required: true })}
          />
          <input
            type="number"
            defaultValue={product.price}
            {...register("price", { required: true })}
          />
          <input
            placeholder="Enter Address"
            defaultValue=""
            {...register("address", { required: true })}
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            defaultValue=""
            {...register("phone", { required: true })}
          />
          <input
            defaultValue={product.status}
            {...register("status", { required: true })}
          />
          <input
            style={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "bolder",
              borderRadius: "10px",
              fontSize: "15px",
              width: "10%",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
