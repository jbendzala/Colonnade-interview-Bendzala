import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { useGetMovies } from "../apiClient/apiClient";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";
import { DoNotDisturb, Search } from "@mui/icons-material";
import { useState } from "react";
import { ItemsSkeleton } from "../components/UI/ItemsSkeleton";

export const HomePage = () => {
  const {
    data: searchedMovies,
    isLoading,
    isSuccess,
  } = useGetMovies({}, { enabled: false, refetchOnWindowFocus: false });
  const currentMovies = searchedMovies?.data.Search;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const paginationLength = Math.ceil(currentMovies?.length / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPaginatedMovies = currentMovies?.slice(
    firstItemIndex,
    lastItemIndex
  );

  if (isLoading) {
    return (
      <Stack>
        <Header />
        <Grid
          container
          columnSpacing={1}
          columns={{ xs: 1, sm: 2, md: 3 }}
          justifyContent='center'
          sx={{ mt: 10 }}
        >
          <ItemsSkeleton n={8} />
        </Grid>
      </Stack>
    );
  }
  return (
    <Stack>
      <Header />
      <Stack alignItems='center' justifyContent='center' sx={{ mt: 10, mb: 4 }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            columnSpacing={1}
            columns={{ xs: 1, sm: 2, md: 3 }}
            justifyContent='center'
          >
            {isSuccess && currentPaginatedMovies?.length > 0 ? (
              currentPaginatedMovies?.map((item, index) => (
                <Link
                  to={`/${item.imdbID}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <Grid item>
                    <MovieCard
                      title={item.Title}
                      year={item.Year}
                      contentType={item.Type}
                      img={item.Poster}
                    />
                  </Grid>
                </Link>
              ))
            ) : isSuccess ? (
              <Stack spacing={2} alignItems='center'>
                <DoNotDisturb
                  fontSize='large'
                  sx={{ color: "text.secondary" }}
                />
                <Typography variant='h4' color='text.secondary'>
                  {"No movies found :("}
                </Typography>
              </Stack>
            ) : (
              <Stack spacing={2} alignItems='center'>
                <Search fontSize='large' sx={{ color: "text.secondary" }} />
                <Typography variant='h4' color='text.secondary'>
                  Search for the movies!
                </Typography>
              </Stack>
            )}
          </Grid>
        </Box>
        {currentMovies?.length > 0 && (
          <Pagination
            count={isSuccess ? paginationLength : 0}
            onChange={(event, value) => setCurrentPage(value)}
            size='medium'
          />
        )}
      </Stack>
    </Stack>
  );
};
