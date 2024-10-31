"use client";

import { FC, FormEvent, useState } from "react";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./LoginForm.module.css";

const slotProps = {
  input: {
    style: { color: "#ededed" },
  },
  inputLabel: {
    style: { color: "#ededed" },
  },
};

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePasswordLength = (password: string) => {
    return password.length >= 8;
  };

  const validatePasswordSymbols = (password: string) => {
    return /[A-Z]/.test(password);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError({ ...error, email: "Не корректный адрес электронной почты" });
    }
    if (!validatePasswordLength(password)) {
      setError({
        ...error,
        password: "Пароль должен содержать не менее 8 символов",
      });
    }
    if (!validatePasswordSymbols(password)) {
      setError({
        ...error,
        password: "Пароль должен содержать хотя бы одну заглавную букву",
      });
    }
    if (
      validateEmail(email) &&
      validatePasswordLength(password) &&
      validatePasswordSymbols(password)
    ) {
      setError({ email: "", password: "" });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/";
      }, 2000);
    }
  };
  return (
    <Stack
      component={"form"}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <Stack component={"div"} className={styles.loginForm}>
        <TextField
          label="Электронная почта"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={slotProps}
        />
        {error.email && <Typography color="error">{error.email}</Typography>}
      </Stack>
      <Stack component={"div"} className={styles.loginForm}>
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={slotProps}
        />
        {error.password && (
          <Typography color="error">{error.password}</Typography>
        )}
      </Stack>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Авторизация"}
      </Button>
    </Stack>
  );
};
