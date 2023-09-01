import {
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DoNotDisturb } from "@mui/icons-material";
import { useState } from "react";
import { FavouritesCard } from "../components/UI/FavouritesCard";

export const FavouritesPage = () => {
  const ids = localStorage.getItem("favourites");
  const allParsedIds = ids ? JSON.parse(ids) : [];

  const uniqueParsedIds = allParsedIds.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  localStorage.setItem("favourites", JSON.stringify(uniqueParsedIds));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
  const paginationLength = Math.ceil(uniqueParsedIds?.length / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPaginatedMovies = uniqueParsedIds?.slice(
    firstItemIndex,
    lastItemIndex
  );

  return (
    <Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
        spacing={2}
        sx={{ mt: 2, mb: 4 }}
      >
        <Typography variant='h5' color='text.secondary'>
          Favourite movies
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            columnSpacing={1}
            columns={{ xs: 1, sm: 2, md: 3 }}
            justifyContent='center'
          >
            {allParsedIds.length > 0 ? (
              currentPaginatedMovies?.map((id, index) => (
                <Link
                  to={`/${id}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <Grid item>
                    <FavouritesCard id={id} />
                  </Grid>
                </Link>
              ))
            ) : (
              <Stack spacing={2} alignItems='center'>
                <DoNotDisturb
                  fontSize='large'
                  sx={{ color: "text.secondary" }}
                />
                <Typography variant='h4' color='text.secondary'>
                  {"No favourite movies"}
                </Typography>
              </Stack>
            )}
          </Grid>
        </Box>
        {uniqueParsedIds.length > 0 && (
          <Pagination
            count={paginationLength}
            onChange={(event, value) => setCurrentPage(value)}
            size='medium'
          />
        )}
        <Link to='/'>
          <Button variant='outlined' sx={{ color: "text.secondary", mt: 1 }}>
            Go back
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
