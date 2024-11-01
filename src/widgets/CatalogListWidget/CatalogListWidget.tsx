import { Stack } from "@mui/material";
import { FC } from "react";
import { IProduct } from "src/entities/shop";
import { ProductCard } from "src/features";

export interface ICatalogListWidgetProps {
  products: IProduct[];
}

export const CatalogListWidget: FC<ICatalogListWidgetProps> = ({
  products,
}) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Stack>
  );
};
