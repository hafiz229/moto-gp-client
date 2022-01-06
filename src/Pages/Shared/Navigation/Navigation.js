import React from "react";
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  // react menu component
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "lime" }}>
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
                <span style={{ color: "black" }}>MotoGP</span>
              </Link>
            </Typography>
            {!user?.email && (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/explore"
              >
                <Button color="inherit" style={{ fontWeight: "bolder" }}>
                  Explore
                </Button>
              </NavLink>
            )}
            {user?.email ? (
              <Stack direction="row" spacing={2}>
                <div>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      paddingY: "16%",
                    }}
                  >
                    {user.displayName} ▼
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper style={{ backgroundColor: "lime" }}>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <NavLink
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                                to="/explore"
                              >
                                <MenuItem
                                  color="inherit"
                                  style={{ fontWeight: "bolder" }}
                                >
                                  Explore
                                </MenuItem>
                              </NavLink>
                              <Divider />
                              <NavLink
                                style={{
                                  textDecoration: "none",
                                }}
                                to="/dashboard"
                              >
                                <MenuItem
                                  sx={{ fontWeight: "bolder", color: "black" }}
                                >
                                  Dashboard
                                </MenuItem>
                              </NavLink>
                              <Divider />
                              <MenuItem
                                onClick={logOut}
                                sx={{ fontWeight: "bolder", color: "black" }}
                              >
                                Logout
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <Button color="inherit" style={{ fontWeight: "bolder" }}>
                  Login
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
