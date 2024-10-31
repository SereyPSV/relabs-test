"use server";

import { IUserList } from "../types";

export const getUserList = async (
  page: number = 1,
  itemsPerPage: number = 5
): Promise<IUserList> => {
  const response = await fetch(
    `https://test.dev-relabs.ru/api/users/list?limit=5&offset=${
      (page - 1) * itemsPerPage
    }`
  );
  const userList = await response.json();

  return userList;
};
