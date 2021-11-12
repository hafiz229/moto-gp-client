import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./UserReview.css";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review Inserted Successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-review">
      <h2>Normal User Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
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
