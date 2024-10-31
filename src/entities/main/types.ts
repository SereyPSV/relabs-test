export interface IUserItem {
  id: number;
  name: string;
  role: string;
  ctime: number;
}

export interface IUserList {
  total: number;
  per_page: number;
  page: number;
  limit: number;
  offset: number;
  items: Array<IUserItem>;
}

export interface IEventItem {
  ctime: number;
  event: string;
}
