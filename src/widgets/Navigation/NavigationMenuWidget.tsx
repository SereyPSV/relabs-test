"use client";

import { FC, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";

export const NavigationMenu: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab component={Link} href="/" label="Главная страница" />
      <Tab component={Link} href="/login" label="Авторизация" />
      <Tab component={Link} href="/shop" label="Магазин" />
    </Tabs>
  );
};
