import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // delete a product
  const handleDelete = (id) => {
    // ask for a confirmation before delete a product
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className="mouse-hover">
      <h2>Manage Products (Admin Only)</h2>
      {products.map((product) => (
        <div key={product._id} className="delete-products">
          <h3 style={{ marginRight: "10px" }}>Product Name: {product.name}</h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "orange", marginBottom: "10px" }}
            size="small"
            onClick={() => handleDelete(product._id)}
          >
            Delete Product
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;
