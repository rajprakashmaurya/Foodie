import { Box, Typography } from "@mui/material";
import React from "react";
import { items } from "./GalleryData";

function Gallery({ item }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={10}
      bgcolor="#fad3d3"
    >
      <Typography variant="p"> GALLERY</Typography>
      <Typography variant="h3" py={5}>
        {" "}
        Check Our Gallery
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        {items.map((item) => (
          <img height={300} src={item.img} alt="image" />
        ))}
      </Box>
    </Box>
  );
}

export default Gallery;
