import { InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ value, onChange, placeholder = "Search movies..." }) => {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "text.secondary" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        maxWidth: 700,

        "& .MuiOutlinedInput-root": {
          height: 56,
          backgroundColor: "white",
          borderRadius: 2,
        },
      }}
    />
  );
};

export default SearchInput;
