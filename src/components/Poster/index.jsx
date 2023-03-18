import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./poster.css";

function Poster() {
  return (
    <Box
      sm={12}
      xl={12}
      className="poster"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
      flexWrap="wrap"
      textAlign="center"
      px={8}
      Overflow="hidden"
    >
      <Box p={2}>
        <Typography fontSize={50} fontWeight={600}>
          232
        </Typography>
        <Typography fontWeight={600} color="gray">
          Clients
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={50} fontWeight={600}>
          232
        </Typography>
        <Typography fontWeight={600} color="gray">
          Projects
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={50} fontWeight={600}>
          1453
        </Typography>
        <Typography fontWeight={600} color="gray">
          Hours Of Support
        </Typography>
      </Box>
      <Box p={2}>
        <Typography fontSize={50} fontWeight={600}>
          32
        </Typography>
        <Typography fontWeight={600} color="gray">
          Workers
        </Typography>
      </Box>
    </Box>
  );
}

export default Poster;
