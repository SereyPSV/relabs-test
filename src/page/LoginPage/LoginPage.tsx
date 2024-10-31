import { FC } from "react";
import { Stack, Typography } from "@mui/material";

export const LoginPage: FC = () => {
  return (
    <Stack className="login__container">
      <Typography component="h2" className="login__title">
        Login page
      </Typography>
    </Stack>
  );
};
