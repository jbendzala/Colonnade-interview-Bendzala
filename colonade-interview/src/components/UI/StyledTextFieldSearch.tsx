import { styled, TextField } from "@mui/material";

export const StyledTextFieldSearch = styled(TextField)({
  "& label.Mui-focused": {
    color: (theme) => theme.palette.primary.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f1b587",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: (theme) => theme.palette.secondary.light,
    },
  },
});
