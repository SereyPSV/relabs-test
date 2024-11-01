import { SxProps } from "@mui/material";

export const cardContainerSx: SxProps = {
  maxWidth: "345px",
  padding: "20px",
};

export const discountBadgeSx: SxProps = {
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
};

export const priceWithDiscountSx: SxProps = {
  fontSize: "20px",
  fontWeight: "bold",
};

export const priceSx: SxProps = {
  marginLeft: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#a0a0a0",
  textDecoration: "line-through",
};

export const pricePartnersPaySx: SxProps = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ca0fa9",
};

export const ratingSx: SxProps = {
  marginY: "10px",
};

export const instalmentContainerSx: SxProps = {
  width: "fit-content",
  padding: "10px 20px",
  marginBottom: "20px",
  borderRadius: "20px",
  backgroundImage: "linear-gradient(to right, #81ff03, #03ffff)",
};

export const instalmentSx: SxProps = {
  fontWeight: 600,
  whiteSpace: "nowrap",
  marginBottom: "25px",
};

export const buttonsBlockSx: SxProps = {
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
};

export const submitButtonSx: SxProps = {
  width: "fit-content",
  whiteSpace: "nowrap",
  backgroundColor: "#ca0fa9",
};

export const iconHeartSx: SxProps = {
  color: "#ca0fa9",
};
