import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./LoginPage.module.css";
import { LoginForm } from "src/features";

export const LoginPage: FC = () => {
  return (
    <Stack component={"section"} className={styles.loginContainer}>
      <Typography variant="h4" component="h2">
        Авторизация
      </Typography>
      <LoginForm />
    </Stack>
  );
};
