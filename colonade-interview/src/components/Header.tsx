import { AppBar, Button, Stack } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/favourites");
  };
  return (
    <AppBar
      elevation={3}
      sx={{
        height: 56,
        justifyContent: "center",
        zIndex: 1201,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{ px: 2 }}
      >
        <SearchBar />
      </Stack>
      <Button
        variant='outlined'
        color='secondary'
        sx={{ position: "fixed", ml: 3 }}
        onClick={handleNavigate}
      >
        Favourites
      </Button>
    </AppBar>
  );
};
