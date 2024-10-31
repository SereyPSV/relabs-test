import { FC } from "react";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./NavigationMenu.module.css";

export const NavigationMenu: FC = () => {
  return (
    <Stack component="nav" className={styles.nav}>
      <List className={styles.navList}>
        <Link className={styles.navItem} href="/">
          <Typography component="span" className={styles.navLink}>
            Главная страница
          </Typography>
        </Link>
        <ListItem component={Link} className={styles.navItem} href="/shop">
          <Typography component="span" className={styles.navLink}>
            Shop
          </Typography>
        </ListItem>
        <ListItem component={Link} className={styles.navItem} href="/login">
          <Typography component="span" className={styles.navLink}>
            Login
          </Typography>
        </ListItem>
      </List>
    </Stack>
  );
};
