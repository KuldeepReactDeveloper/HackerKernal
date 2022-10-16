import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const TableHeaderCompoent = () => {
  return (
    <div>
      <Card>
        <Grid container px={1} py={1}>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Grid>
              <Typography fontWeight="bold">ProductName</Typography>
            </Grid>
            <Grid>
              <Typography fontWeight="bold">ProductPrice</Typography>
            </Grid>
            <Grid>
              <Typography fontWeight="bold">Action</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TableHeaderCompoent;
