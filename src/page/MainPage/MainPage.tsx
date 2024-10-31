import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { EventsListWidget, NavigationMenu, UsersListWidget } from "src/widgets";
import { IUserItem } from "src/entities";
import useWebSocket from "react-use-websocket";

export const MainPage: FC = () => {
  return (
    <Stack sx={{ gap: "20px" }}>
      <NavigationMenu />
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Stack sx={{ width: "60%", alignItems: "center", gap: "20px" }}>
          <Typography variant="h4" component="h2">
            Список пользователей
          </Typography>
          <UsersListWidget />
        </Stack>
        <Stack sx={{ width: "35%", alignItems: "center", gap: "20px" }}>
          <Typography variant="h4" component="h2">
            События
          </Typography>
          <EventsListWidget />
        </Stack>
      </Stack>
    </Stack>
  );
};
