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

type MovieCardProps = {
  title: string;
  year: string;
  contentType: string;
  img: string;
};

export const MovieCard = ({
  title,
  year,
  contentType,
  img,
}: MovieCardProps) => {
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
      <CardMedia sx={{ height: 290 }} image={img} />
      <CardContent>
        <Stack>
          <Tooltip title={title} arrow>
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
              {title}
            </Typography>
          </Tooltip>
          <Stack direction='row' spacing={1}>
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
          </Stack>
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
