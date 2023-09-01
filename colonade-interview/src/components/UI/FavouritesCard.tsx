import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useGetMovies } from "../../apiClient/apiClient";

type FavouritesCardProps = {
  id: string;
};

export const FavouritesCard = ({ id }: FavouritesCardProps) => {
  const { data: reqData } = useGetMovies({ i: id }, { enabled: true });
  const movieInfo = reqData?.data;

  return (
    <Card
      elevation={3}
      sx={{
        width: 340,
        borderRadius: 3,
        mb: 4,
        mx: 1,
        cursor: "pointer",
        backgroundColor: "transparent",
        ":hover": {
          boxShadow: 6,
          transition: "250ms",
          transitionDelay: "inherit",
          backgroundColor: "secondary.light",
        },
      }}
    >
      <CardMedia sx={{ height: 290 }} image={movieInfo?.Poster} />
      <CardContent>
        <Stack>
          <Tooltip title={movieInfo?.Title} arrow>
            <Typography
              gutterBottom
              variant='h5'
              sx={{
                maxWidth: "320px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {movieInfo?.Title}
            </Typography>
          </Tooltip>
          {/* <Stack direction='row' spacing={1}>
            <Typography variant='h6' color='text.secondary'>
              Year:
            </Typography>
            <Typography variant='h6'>{year}</Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='subtitle1' color='text.secondary'>
              Type:
            </Typography>
            <Typography variant='subtitle1'>{contentType}</Typography>
          </Stack> */}
        </Stack>
      </CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
        <Button size='medium' variant='outlined' sx={{ borderRadius: 4 }}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};
