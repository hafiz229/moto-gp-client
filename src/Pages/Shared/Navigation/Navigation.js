import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "orange" }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                }}
                to="/"
              >
                <img
                  style={{ width: "28px", height: "28px", borderRadius: "50%" }}
                  alt=""
                  src="https://i.ibb.co/1Q6vQ9R/37-372579-motogp-logo-background-1-hd-wallpapers-moto-gp.jpg"
                />{" "}
                MotoGP
              </Link>
            </Typography>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/explore"
            >
              <Button color="inherit">Explore</Button>
            </NavLink>
            {user?.email ? (
              <Box>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/dashboard"
                >
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button color="inherit">{user.displayName}</Button>
                <Button onClick={logOut} color="inherit">
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
