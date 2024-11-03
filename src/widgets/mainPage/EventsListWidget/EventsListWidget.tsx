"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { IEventItem } from "src/entities";
import { formatDate } from "src/shared";

export const EventsListWidget: FC = () => {
  const [events, setEvents] = useState<IEventItem[]>([]);
  const { getWebSocket } = useWebSocket("wss://test.dev-relabs.ru/event", {
    onMessage: (message) => {
      const event = JSON.parse(message.data);
      setEvents((prevEvents) => [...prevEvents, event]);
    },
  });

  useEffect(() => {
    return () => {
      const socket = getWebSocket();
      if (socket) {
        socket.close();
      }
    };
  }, [getWebSocket]);

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
