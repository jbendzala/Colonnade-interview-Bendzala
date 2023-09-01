import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "./Routes/AppRoutes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className='bg'>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
