import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CreateComponent({ getAllData }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const product = {
        productName,
        price,
      };
      getAllData(product);
      setProductName("");
      setPrice("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container  display="flex" justifyContent="center" mt={12} mb={2}>
          <Grid item xs={12} sm={8} md={8}>
            <Card elevation={5}>
              <Grid container>
                <Grid item xs={12} px={3} py={3}>
                  <Typography sx={{ color: "#635cf7" }}>ProductName</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} px={3} py={1}>
                  <Typography sx={{ color: "#635cf7" }}>
                    ProductPrice
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} px={3} py={1} mb={2}  textAlign="center">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ backgroundColor: "#635cf7" }}
                  >
                    Add Product
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
