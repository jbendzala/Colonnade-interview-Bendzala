import {
  Button,
  Card,
  CardMedia,
  Checkbox,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DoNotDisturb, Star, StarBorderOutlined } from "@mui/icons-material";
import { useGetMovies } from "../apiClient/apiClient";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavourite, setIsFavourite] = useState<boolean>(
    localStorage.getItem("favourites")
      ? !!JSON.parse(localStorage.getItem("favourites")!).find(
          (item) => item === String(id)
        )
      : false
  );
  const {
    data: reqData,
    isLoading,
    isSuccess,
  } = useGetMovies({ i: id }, { enabled: true });
  const movieInfo = reqData?.data;
  const movieDataAvailable = isSuccess && movieInfo?.imdbID;

  useEffect(() => {
    const isLocalStorageItem = localStorage.getItem("favourites");
    if (!isLocalStorageItem) {
      const arr = [];
      localStorage.setItem("favourites", JSON.stringify(arr));
    }
    const favouritesFromStorage = localStorage.getItem("favourites");
    if (isFavourite && favouritesFromStorage) {
      const favourites = JSON.parse(favouritesFromStorage);
      favourites.push(id);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
    if (!isFavourite && favouritesFromStorage) {
      const favourites = JSON.parse(favouritesFromStorage);
      const newFavourites = favourites.filter((item) => item !== id);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    }
  }, [id, isFavourite]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Stack alignItems='center' spacing={2} sx={{ m: 5 }}>
      <Typography variant='h4' color='text.primary'>
        Detail info
      </Typography>
      <Card
        variant='outlined'
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.light,
          borderRadius: "50px",
          borderWidth: "2px",
          borderColor: (theme) => theme.palette.primary.main,
          width: "100%",
          color: (theme) => theme.palette.primary.light,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {movieDataAvailable ? (
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={3}
          >
            <CardMedia
              image={movieInfo?.Poster}
              sx={{ width: "40%", height: "380px", borderRadius: 4 }}
            />
            <Stack>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <Stack direction='row' spacing={1}>
                  <Typography
                    variant={"h4"}
                    color='text.secondary'
                    gutterBottom
                  >
                    Title:
                  </Typography>
                  <Typography variant={"h4"} color='text.primary'>
                    {movieInfo?.Title}
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Typography variant={"h6"} color='text.secondary'>
                    Add to favoutires
                  </Typography>
                  <Checkbox
                    icon={<StarBorderOutlined fontSize='large' />}
                    checkedIcon={<Star fontSize='large' />}
                    sx={{
                      "&.Mui-checked": {
                        color: "secondary.dark",
                      },
                    }}
                    onChange={() => setIsFavourite(!isFavourite)}
                    checked={isFavourite}
                  />
                </Stack>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Actors:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Actors}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Awards:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Awards}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  BoxOffice:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.BoxOffice}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Country:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Country}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  DVD:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.DVD}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Director:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Director}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Genre:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Genre}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Language:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Language}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Metascore:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Metascore}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Plot:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Plot}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Production:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Production}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Rated:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Rated}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Ratings:
                </Typography>
                {movieInfo?.Ratings?.map((rating, index) => (
                  <Stack direction='row' key={index} spacing={1}>
                    <Typography variant={"h5"} color='text.primary'>
                      {rating?.Source}:
                    </Typography>
                    <Typography variant={"h5"} color='text.primary'>
                      {rating?.Value},
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Released:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Released}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Response:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Response}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Runtime:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Runtime}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Type:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Type}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Website:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Website}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Writer:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Writer}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  Year:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.Year}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  imdbRating:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.imdbRating}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant={"h5"} color='text.secondary'>
                  imdbVotes:
                </Typography>
                <Typography variant={"h5"} color='text.primary'>
                  {movieInfo?.imdbVotes}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ) : isLoading ? (
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={2}
          >
            <CircularProgress size={32} />
          </Stack>
        ) : (
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ m: 5 }}
            spacing={2}
          >
            <DoNotDisturb fontSize='large' sx={{ color: "text.secondary" }} />
            <Typography variant='h5' color='text.secondary'>
              No data available
            </Typography>
          </Stack>
        )}
      </Card>
      <Button
        variant='outlined'
        sx={{ color: "text.secondary", mt: 1 }}
        onClick={handleNavigate}
      >
        Go back
      </Button>
    </Stack>
  );
};
