"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC, useState } from "react";
import useWebSocket from "react-use-websocket";
import { IEventItem } from "src/entities";
import { formatDate } from "src/shared";

export const EventsListWidget: FC = () => {
  const [events, setEvents] = useState<IEventItem[]>([]);

  useWebSocket("wss://test.dev-relabs.ru/event", {
    onMessage: (message) => {
      const event = JSON.parse(message.data);
      setEvents((prevEvents) => [...prevEvents, event]);
    },
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Дата</TableCell>
          <TableCell>Событие</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {events.map((event, index) => (
          <TableRow key={index}>
            <TableCell>{formatDate(event.ctime)}</TableCell>
            <TableCell>{event.event}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
