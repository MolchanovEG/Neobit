import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <Box display="flex" justifyContent="right" margin="10px">
      <TextField
        variant="outlined"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleEnter}
        style={{ marginRight: "10px", width: "150px" }}
      />
      <Button variant="contained" color="inherit" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
