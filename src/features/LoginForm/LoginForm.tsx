"use client";

import { FC, FormEvent, useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { inputContainerSx, loginFormContainerSx } from "./styles";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    return /[A-ZА-ЯЁ]/.test(password);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!validateEmail(trimmedEmail)) {
      setError({ ...error, email: "Не корректный адрес электронной почты" });
    }
    if (!validatePasswordLength(trimmedPassword)) {
      setError({
        ...error,
        password: "Пароль должен содержать не менее 8 символов",
      });
    }
    if (!validatePasswordSymbols(trimmedPassword)) {
      setError({
        ...error,
        password: "Пароль должен содержать хотя бы одну заглавную букву",
      });
    }
    if (
      validateEmail(trimmedEmail) &&
      validatePasswordLength(trimmedPassword) &&
      validatePasswordSymbols(trimmedPassword)
    ) {
      setError({ email: "", password: "" });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/";
      }, 2000);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} sx={loginFormContainerSx}>
      <Stack component="div" sx={inputContainerSx}>
        <TextField
          label="Электронная почта"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        {error.email && <Typography color="error">{error.email}</Typography>}
      </Stack>
      <Stack component="div" sx={inputContainerSx}>
        <TextField
          label="Пароль"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        {error.password && (
          <Typography color="error">{error.password}</Typography>
        )}
      </Stack>
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="primary"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Авторизация"}
      </Button>
    </Stack>
  );
};
