"use client";

import {
  Button,
  CircularProgress,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IUserItem } from "src/entities";
import { formatDate } from "src/shared";
import { nameColumnSx, userListContainerSx } from "./styles";

const itemsPerPage = 5;

export const UsersListWidget: FC = () => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(
      `https://test.dev-relabs.ru/api/users/list?limit=5&offset=${
        (page - 1) * itemsPerPage
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items);
        setTotalPages(Math.ceil(data.total / 5));
        setLoading(false);
      });
  }, [page]);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <Stack sx={userListContainerSx}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell sx={nameColumnSx}>Имя</TableCell>
                <TableCell>Роль</TableCell>
                <TableCell>Дата создания</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{formatDate(user.ctime)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value: number) => setPage(value)}
            shape="rounded"
            color="primary"
          />
        </>
      )}
    </Stack>
  );
};
