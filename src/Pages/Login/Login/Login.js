import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, SignInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // Email/Password Login Submit Handler
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  // Google Sign In Click Handler
  const handleGoogleSignIn = () => {
    SignInWithGoogle(location, history);
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
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Enter Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Enter Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                sx={{ width: "25%", m: 1, backgroundColor: "orange" }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>-----------------------------------</p>
            <Button
              sx={{ backgroundColor: "orange" }}
              onClick={handleGoogleSignIn}
              variant="contained"
            >
              Google Sign In
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/S5v0B4g/access-control-system-abstract-concept-335657-3180.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
