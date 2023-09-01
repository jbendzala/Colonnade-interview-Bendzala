import { Grid, Skeleton } from "@mui/material";

type ItemsSkeletonProps = {
  n: number;
};

export const ItemsSkeleton = ({ n }: ItemsSkeletonProps) => {
  return (
    <>
      {[...Array(n)].map((e, i) => (
        <Grid item key={i}>
          <Skeleton
            variant='rounded'
            width={340}
            height={440}
            sx={{ mb: 3, mr: 2 }}
          />
        </Grid>
      ))}
    </>
  );
};
