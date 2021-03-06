import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://afternoon-waters-58275.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product Inserted Successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-product">
      <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
        Add New Products
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Enter Product Name (max 20 characters)"
        />
        <textarea
          {...register("description", { required: true, maxLength: 180 })}
          placeholder="Enter Product Description (max 180 characters)"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Enter Product Image (url only)"
        />
        <input
          type="number"
          {...register("price", { required: true, maxLength: 4 })}
          placeholder="Enter Product Price ($) (max 4 digits)"
        />
        <select {...register("status", { required: true })}>
          <option value="pending">pending</option>
        </select>

        <input
          style={{
            backgroundColor: "orange",
            color: "white",
            fontWeight: "bolder",
            fontSize: "15px",
            width: "10%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
