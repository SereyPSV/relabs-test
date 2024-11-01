import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { EventsListWidget, NavigationMenu, UsersListWidget } from "src/widgets";
import {
  eventsContainerSx,
  mainPageContainerSx,
  mainPageContentSx,
  usersListContainerSx,
} from "./styles";

export const MainPage: FC = () => {
  return (
    <Stack sx={mainPageContainerSx}>
      <NavigationMenu />
      <Stack sx={mainPageContentSx}>
        <Stack sx={usersListContainerSx}>
          <Typography variant="h4" component="h1">
            Список пользователей
          </Typography>
          <UsersListWidget />
        </Stack>
        <Stack sx={eventsContainerSx}>
          <Typography variant="h4" component="h2">
            События
          </Typography>
          <EventsListWidget />
        </Stack>
      </Stack>
    </Stack>
  );
};
