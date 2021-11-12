import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user, token } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  // get my orders
  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, token]);

  // delete an order
  const handleDelete = (id) => {
    // ask for a confirmation before delete an order
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = myOrders.filter((myOrder) => myOrder._id !== id);
            setMyOrders(remaining);
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
            My Orders (Normal User)
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ textAlign: "left" }}
          >
            {myOrders.map((myOrder) => (
              <MyOrder
                key={myOrder._id}
                myOrder={myOrder}
                handleDelete={handleDelete}
              ></MyOrder>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default MyOrders;
