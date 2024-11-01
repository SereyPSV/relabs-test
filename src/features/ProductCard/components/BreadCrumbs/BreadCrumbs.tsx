import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";
import { ISpecs } from "src/entities/shop";

interface IBreadCrumbsProps {
  brand: string;
  name: string;
  specs: ISpecs;
}

export const BreadCrumbs: FC<IBreadCrumbsProps> = ({ brand, name, specs }) => {
  const { screen, processor, ram, storage, battery } = specs;
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ fontSize: "12px", color: "#aaaaaa" }}
    >
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {brand}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {name}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {screen}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {processor}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {ram}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {storage}
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/shop"
      >
        {battery}
      </Link>
    </Breadcrumbs>
  );
};
