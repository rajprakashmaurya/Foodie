import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <Card elevation={7}>
      <CardContent>
        <img height={200} src={item.img} loading="lazy" alt="" />
        <Typography variant="h5">{item.title}</Typography>
        <Typography variant="p">{item.descriptions}</Typography> <br />
        <Typography variant="span" fontSize={22} fontWeight={700}>
          {item.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
