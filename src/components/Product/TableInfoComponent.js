import React from "react";
import { Card, Grid, Typography ,IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const TableInfoCompinent = ({ product, deleteProduct }) => {
  return (
    <div>
      <Card sx={{marginTop:"0.5rem"}}>
        <Grid container px={0.5}>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <Grid>
              <Typography>{product.productName}</Typography>
            </Grid>
            <Grid>
              <Typography>{product.price}</Typography>
            </Grid>
            <Grid>
              <IconButton onClick={() => deleteProduct(product)}>
                <ClearIcon sx={{color:"red"}} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TableInfoCompinent;
