import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // get all orders
  useEffect(() => {
    fetch("https://afternoon-waters-58275.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  // update the status of an order
  const handleApprove = (id, status) => {
    const order = { status };
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      fetch(`https://afternoon-waters-58275.herokuapp.com/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  // delete an order
  const handleDelete = (id) => {
    // ask for a confirmation before delete an order
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `https://afternoon-waters-58275.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = allOrders.filter(
              (allOrder) => allOrder._id !== id
            );
            setAllOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{ fontWeight: 600, m: 2 }}
            variant="h4"
            component="div"
          >
            Manage All Orders
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ textAlign: "left" }}
          >
            {allOrders.map((allOrder) => (
              <ManageAllOrder
                key={allOrder._id}
                allOrder={allOrder}
                handleDelete={handleDelete}
                handleApprove={handleApprove}
              ></ManageAllOrder>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ManageAllOrders;
