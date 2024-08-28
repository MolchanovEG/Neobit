import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            News App
          </Typography>

          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/category/sport">
              Sport
            </Button>
            <Button color="inherit" component={Link} to="/category/science">
              Science
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <SearchBar />
    </>
  );
};

export default Navbar;
