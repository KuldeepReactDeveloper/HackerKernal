import { Card, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchProductComponent = ({ setSearch }) => {
  return (
    <div>
      <Card sx={{ backgroundColor: "#635cf7", marginTop: "1rem" }}>
        <Grid container justifyContent="center">
          <Grid item xs={4} p={1}>
            <TextField
              size="small"
              fullWidth
              placeholder="Enter Product Name"
              onChange={(e) => setSearch(e.target.value)}
              sx={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "black" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default SearchProductComponent;
