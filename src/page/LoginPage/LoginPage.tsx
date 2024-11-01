import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { LoginForm } from "src/features";
import { loginPageContainerSx } from "./syyles";

export const LoginPage: FC = () => {
  return (
    <Stack component="section" sx={loginPageContainerSx}>
      <Typography variant="h4" component="h2">
        Авторизация
      </Typography>
      <LoginForm />
    </Stack>
  );
};
