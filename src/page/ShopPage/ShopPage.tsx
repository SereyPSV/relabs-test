import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { mockProducts } from "src/entities/shop";
import { CatalogListWidget } from "src/widgets";

export const ShopPage: FC = () => {
  return (
    <Stack sx={{ alignItems: "center", gap: "20px" }}>
      <Typography variant="h4" component="h2">
        Магазин
      </Typography>
      <CatalogListWidget products={mockProducts} />
    </Stack>
  );
};
