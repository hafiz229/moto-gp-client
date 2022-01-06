import { Container, Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  // set maxlimit to 6
  const size = 6;

  useEffect(() => {
    fetch(`https://afternoon-waters-58275.herokuapp.com/products?size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#F5F6F7" }}>
      <Container>
        <Typography sx={{ fontWeight: 600, p: 2 }} variant="h4" component="div">
          Our Top Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ textAlign: "left" }}
        >
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
