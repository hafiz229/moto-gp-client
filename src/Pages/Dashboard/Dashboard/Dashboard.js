import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import NormalRoute from "../../Login/NormalRoute/NormalRoute";
import Home from "../../Home/Home/Home";
import UserReview from "../UserReview/UserReview";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // from nesting of react router
  let { path, url } = useRouteMatch();

  // receive admin from useAuth()
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ textAlign: "left", mx: 2 }}>
        {/* home route */}
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button color="warning" sx={{ fontWeight: "bolder" }}>
            Home Page
          </Button>
        </Link>
        <br />
        {/* logout button */}
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button
            onClick={logOut}
            color="warning"
            sx={{ fontWeight: "bolder" }}
          >
            Logout
          </Button>
        </Link>
        <br />
        {/* common routes */}
        <Link to={`${url}`} style={{ textDecoration: "none" }}>
          <Button color="warning" sx={{ fontWeight: "bolder" }}>
            Dashboard Home
          </Button>
        </Link>
        <br />
        {/* admin routes */}
        {admin && (
          <Box>
            <Link to={`${url}/addProducts`} style={{ textDecoration: "none" }}>
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                Add Products
              </Button>
            </Link>
            <br />
            <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                Make Admin
              </Button>
            </Link>
            <br />
            <Link
              to={`${url}/manageAllOrders`}
              style={{ textDecoration: "none" }}
            >
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                Manage All Orders
              </Button>
            </Link>
            <br />
            <Link
              to={`${url}/manageProducts`}
              style={{ textDecoration: "none" }}
            >
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                Manage Products
              </Button>
            </Link>
            <br />
          </Box>
        )}
        {/* normal user routes */}
        {!admin && (
          <Box>
            <Link to={`${url}/myOrders`} style={{ textDecoration: "none" }}>
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                My Orders
              </Button>
            </Link>
            <br />
            <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                My Payments
              </Button>
            </Link>
            <br />
            <Link to={`${url}/userReview`} style={{ textDecoration: "none" }}>
              <Button color="warning" sx={{ fontWeight: "bolder" }}>
                User Review
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "orange",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* admin routes */}
          <AdminRoute path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          {/* normal user routes */}
          <NormalRoute path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </NormalRoute>
          <NormalRoute path={`${path}/pay`}>
            <Pay></Pay>
          </NormalRoute>
          <NormalRoute path={`${path}/userReview`}>
            <UserReview></UserReview>
          </NormalRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
