import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { NavigationMenu } from "src/widgets";

export const MainPage: FC = () => {
  return (
    <Stack className="main-page__container">
      <NavigationMenu />
      <Typography component="h1" className="main__title">
        Main page
      </Typography>
    </Stack>
  );
};
