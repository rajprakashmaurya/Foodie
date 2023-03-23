import { Box, Typography } from "@mui/material";
import React from "react";
import { items } from "./GalleryData";

function Gallery() {
  return (
    <div id="Gallery">
      <Box textAlign="center" py={10} bgcolor="#fad3d3" data-aos="fade-up">
        <Typography variant="p"> GALLERY</Typography>
        <Typography variant="h3" py={3} fontFamily="Amatic SC, cursive">
          Check Our Gallery
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          {items.map((item) => (
            <img
              style={{ border: "4px solid #fff" }}
              height={280}
              src={item.img}
              alt="image"
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Gallery;
