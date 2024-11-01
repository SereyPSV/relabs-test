import { Stack } from "@mui/material";
import { FC } from "react";
import { IProduct } from "src/entities/shop";
import { ProductCard } from "src/features";
import { catalogContainerSx } from "./styles";

export interface ICatalogListWidgetProps {
  products: IProduct[];
}

export const CatalogListWidget: FC<ICatalogListWidgetProps> = ({
  products,
}) => {
  return (
    <Stack sx={catalogContainerSx}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Stack>
  );
};
