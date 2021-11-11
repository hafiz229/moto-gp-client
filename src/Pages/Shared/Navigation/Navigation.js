import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MotoGP
              </Link>
            </Typography>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/explore"
            >
              <Button color="inherit">Explore</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard"
            >
              <Button color="inherit">Dashboard</Button>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
