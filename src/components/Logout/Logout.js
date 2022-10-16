import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const Logout = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "#635cf7" }}>
            <Grid container alignItems="center">
              <Grid item xs={6} display="flex" alignItems="center">
                <img src="kernalhacker.png" />
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  HackerKernal
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Logout;
