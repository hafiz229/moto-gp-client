import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <Navigation></Navigation>
      <Container sx={{ marginTop: "2%" }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={6}>
            <Typography
              sx={{ fontWeight: 600, m: 2 }}
              variant="h4"
              component="div"
              gutterBottom
            >
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  label="Enter Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  label="Enter Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  label="Enter Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  label="Confirm Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  sx={{ width: "25%", m: 1, backgroundColor: "orange" }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/CHSzDBz/account-concept-illustration-114360-399.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
