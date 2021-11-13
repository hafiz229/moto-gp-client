import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Navigation from "../../Shared/Navigation/Navigation";
import ExploreProduct from "../ExploreProduct/ExploreProduct";
import Footer from "../../Home/Footer/Footer";

const ExploreProducts = () => {
  const [exploreProducts, setExploreProducts] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-waters-58275.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setExploreProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "5%" }}>
        <Container>
          <Typography
            sx={{ fontWeight: 600, m: 2 }}
            variant="h4"
            component="div"
          >
            Explore All Products
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ textAlign: "left" }}
          >
            {exploreProducts.map((exploreProduct) => (
              <ExploreProduct
                key={exploreProduct._id}
                exploreProduct={exploreProduct}
              ></ExploreProduct>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default ExploreProducts;
