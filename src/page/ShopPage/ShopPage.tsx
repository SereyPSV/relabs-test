import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { mockProducts } from "src/entities/shop";
import { CatalogListWidget } from "src/widgets";
import { shopPageContainerSx } from "./styles";

export const ShopPage: FC = () => {
  return (
    <Stack sx={shopPageContainerSx}>
      <Typography variant="h4" component="h2">
        Магазин
      </Typography>
      <CatalogListWidget products={mockProducts} />
    </Stack>
  );
};
