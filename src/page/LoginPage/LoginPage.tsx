import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { LoginForm } from "src/features";

export const LoginPage: FC = () => {
  return (
    <Stack
      component="section"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        paddingTop: "200px",
      }}
    >
      <Typography variant="h4" component="h2">
        Авторизация
      </Typography>
      <LoginForm />
    </Stack>
  );
};
