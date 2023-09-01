import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useRef, useState } from "react";
import { StyledTextFieldSearch } from "./UI/StyledTextFieldSearch";
import { useGetMovies } from "../apiClient/apiClient";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchRef = useRef(null);

  const { refetch } = useGetMovies(
    {
      s: searchValue,
    },
    { enabled: false, refetchOnWindowFocus: false }
  );

  const onFieldChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form>
      <StyledTextFieldSearch
        type='text'
        ref={searchRef}
        id='search-bar'
        color='secondary'
        placeholder='Search...'
        variant='outlined'
        size='small'
        onChange={onFieldChange}
        onSubmit={handleSearch}
        sx={{ width: "500px" }}
        inputProps={{
          sx: {
            color: (theme) => theme.palette.primary.dark,
          },
        }}
        InputLabelProps={{
          sx: { color: (theme) => theme.palette.primary.dark },
        }}
        InputProps={{
          sx: {
            color: (theme) => theme.palette.secondary.main,
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: "50px",
            height: "36px",
          },
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                edge='end'
                onClick={handleSearch}
                disabled={searchValue === ""}
                size='small'
                type='submit'
              >
                <Search
                  fontSize='medium'
                  sx={{
                    color: "primary.main",
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
