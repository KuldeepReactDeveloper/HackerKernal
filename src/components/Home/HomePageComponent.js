import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateComponent from "../Product/CreateProductComponent";
import SearchComponent from "../Product/SearchProductComponent";
import TableHeaderCompoent from "../Product/TableHeaderComponent";
import TableInfoCompinent from "../Product/TableInfoComponent";

const HomePageComponent = () => {
  const [store, setStore] = useState([]);
  const [search, setSearch] = useState("");

  const getAllData = (product) => {
    setStore([...store, product]);
  };

  const deleteProduct = (product) => {
    setStore([
      ...store.filter((item) => item.productName !== product.productName),
    ]);
  };

  return (
    <div>
      <CreateComponent getAllData={getAllData} />
      <SearchComponent setSearch={setSearch} />
      <Grid container mt={2}>
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ color: "red", fontWeight: "bold" }}>
            {" "}
            {store.length === 0 ? "NO PRODUCT FOUND" : ""}{" "}
          </Typography>
        </Grid>
      </Grid>
      <TableHeaderCompoent />
      {store
        .filter((post) => {
          if (search === "") {
            return post;
          } else if (
            post.productName.toLowerCase().includes(search.toLowerCase())
          ) {
            return post;
          }
        })
        .map((product, index) => {
          return (
            <TableInfoCompinent
              product={product}
              key={index}
              deleteProduct={deleteProduct}
            />
          );
        })}
    </div>
  );
};
export default HomePageComponent;
