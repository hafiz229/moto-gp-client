import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          py: 2,
          backgroundColor: "black",
          color: "orange",
          textAlign: "center",
        }}
      >
        Copyright © 2024 All Rights Reserved by MotoGP
      </Typography>
    </div>
  );
};

export default Footer;
