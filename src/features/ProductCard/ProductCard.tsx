import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { IProduct } from "src/entities/shop";
import { formatPrice } from "src/shared";
import { BreadCrumbs } from "./components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  buttonsBlockSx,
  cardContainerSx,
  discountBadgeSx,
  iconHeartSx,
  instalmentContainerSx,
  instalmentSx,
  pricePartnersPaySx,
  priceSx,
  priceWithDiscountSx,
  ratingSx,
  submitButtonSx,
} from "./styles";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, brand, price, discount, imageUrl, rating = 0 } = product;

  return (
    <Card sx={cardContainerSx}>
      <Badge
        badgeContent={`${discount}%`}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={discountBadgeSx}
      >
        <CardMedia
          component="img"
          width={"325px"}
          image={imageUrl}
          alt="green iguana"
        />
      </Badge>
      <CardContent>
        <Typography component="span" sx={priceWithDiscountSx}>
          {formatPrice((price * (100 - discount)) / 100)}
        </Typography>
        <Typography component="span" sx={priceSx}>
          {`${formatPrice(price)}`}
        </Typography>
        <Typography component="p" sx={pricePartnersPaySx}>
          {formatPrice(((price * (100 - discount)) / 100) * 0.95)}
        </Typography>
        <BreadCrumbs brand={brand} name={name} specs={product.specs} />
        <Rating value={rating} precision={0.2} sx={ratingSx} />
        <Box component="div" sx={instalmentContainerSx}>
          <Typography component="span" sx={instalmentSx}>
            РАССРОЧКА 0-0-6
          </Typography>
        </Box>
        <Stack sx={buttonsBlockSx}>
          <Button variant="contained" sx={submitButtonSx}>
            В КОРЗИНУ
          </Button>
          <FavoriteBorderIcon sx={iconHeartSx} />
        </Stack>
      </CardContent>
    </Card>
  );
};
