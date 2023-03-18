import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./poster.css";

function Poster() {
  return (
    <Box className="poster">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        gap={25}
      >
        <Box my={20} textAlign="center">
          <Typography fontSize={50} fontWeight={600}>
            232
          </Typography>
          <Typography fontWeight={600} color="gray">
            Clients
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontSize={50} fontWeight={600}>
            232
          </Typography>
          <Typography fontWeight={600} color="gray">
            Projects
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontSize={50} fontWeight={600}>
            1453
          </Typography>
          <Typography fontWeight={600} color="gray">
            Hours Of Support
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontSize={50} fontWeight={600}>
            32
          </Typography>
          <Typography fontWeight={600} color="gray">
            Workers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Poster;
