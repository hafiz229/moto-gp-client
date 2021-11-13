import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./UserReview.css";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    axios
      .post("https://afternoon-waters-58275.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review Inserted Successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-review">
      <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
        User Review
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          placeholder="Enter your name"
        />
        <input
          {...register("profession", { required: true })}
          placeholder="Enter Company's name, Profession"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Enter Description"
        />
        <select {...register("rating", { required: true })}>
          <option value="5">User Rating: 5</option>
          <option value="4">User Rating: 4</option>
          <option value="3">User Rating: 3</option>
          <option value="2">User Rating: 2</option>
          <option value="1">User Rating: 1</option>
          <option value="0">User Rating: 0</option>
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

export default UserReview;
