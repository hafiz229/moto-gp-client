import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  // show success msg if make admin success
  const [success, setSuccess] = useState(false);
  // receive token from useAuth()
  const { token } = useAuth();
  //   https://afternoon-waters-58275.herokuapp.com/
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://afternoon-waters-58275.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
        Make Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "40%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "orange" }}
        >
          Make Admin
        </Button>
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
