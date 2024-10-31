import { FC } from "react";
import { Stack, Typography } from "@mui/material";

export const MainPage: FC = () => {
  return (
    <Stack className="main__container">
      <Typography variant="h1" className="main__title">
        Main page
      </Typography>
    </Stack>
  );
};
