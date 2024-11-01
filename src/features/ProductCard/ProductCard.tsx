import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
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

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, brand, price, discount, imageUrl, rating = 9 } = product;

  return (
    <Card sx={{ maxWidth: "345px", padding: "20px" }}>
      <Badge
        badgeContent={`${discount}%`}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          margin: "10px",
          "& .MuiBadge-badge": {
            marginLeft: "10px",
            width: "50px",
            height: "30px",
            fontSize: "20px",
            color: "#ca0fa9",
            backgroundColor: "#faeefb",
            borderRadius: "20px",
          },
        }}
      >
        <CardMedia
          component="img"
          width={"325px"}
          image={imageUrl}
          alt="green iguana"
        />
      </Badge>
      <CardContent>
        <Typography
          component="span"
          sx={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {formatPrice((price * (100 - discount)) / 100)}
        </Typography>
        <Typography
          component="span"
          sx={{
            marginLeft: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#a0a0a0",
            textDecoration: "line-through",
          }}
        >
          {`${formatPrice(price)}`}
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#ca0fa9" }}
        >
          {formatPrice(((price * (100 - discount)) / 100) * 0.95)}
        </Typography>
        <BreadCrumbs brand={brand} name={name} specs={product.specs} />
        <Rating value={rating} precision={0.2} sx={{ marginY: "10px" }} />
        <Box
          component="div"
          sx={{
            width: "fit-content",
            padding: "10px 20px",
            marginBottom: "20px",
            borderRadius: "20px",
            backgroundImage: "linear-gradient(to right, #81ff03, #03ffff)",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              whiteSpace: "nowrap",
              marginBottom: "25px",
            }}
          >
            РАССРОЧКА 0-0-6
          </Typography>
        </Box>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              whiteSpace: "nowrap",
              backgroundColor: "#ca0fa9",
            }}
          >
            В КОРЗИНУ
          </Button>
          <FavoriteBorderIcon sx={{ color: "#ca0fa9" }} />
        </Stack>
      </CardContent>
    </Card>
  );
};
