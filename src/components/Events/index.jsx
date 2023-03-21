import React from "react";
import "./index.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Events() {
  return (
    <Box
      display="flex"
      flexDirection="column "
      alignItems="center"
      justifyContent="center"
      py={10}
    >
      <Typography variant="p" color="gray">
        EVENTS
      </Typography>
      <Typography variant="h3" my={2} textAlign="center">
        Share Your Moments In Our Restaurant
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        my={5}
      >
        <Box className="event" color="white">
          <Box px={5}>
            <Typography variant="h5" pt={2} fontWeight={800}>
              Custom Parties
            </Typography>
            <Typography fontWeight={700} variant="h4" py={3}>
              $399
            </Typography>
            <Typography variant="p" fontSize={18}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
              ipsum fugit a eius fuga, nesciunt, ducimus cupiditate repellat
              tempore reprehenderit, officia delectus?
            </Typography>
          </Box>
        </Box>
        <Box className="event" color="white">
          <Box px={5}>
            <Typography variant="h5" pt={2} fontWeight={800}>
              Custom Parties
            </Typography>
            <Typography fontWeight={700} variant="h4" py={3}>
              $499
            </Typography>
            <Typography variant="p" fontSize={18}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
              ipsum fugit a eius fuga, nesciunt, ducimus cupiditate repellat
              tempore reprehenderit, officia delectus?
            </Typography>
          </Box>
        </Box>
        <Box className="event" color="white">
          <Box px={5}>
            <Typography variant="h5" pt={2} fontWeight={800}>
              Custom Parties
            </Typography>
            <Typography fontWeight={700} variant="h4" py={3}>
              $289
            </Typography>
            <Typography variant="p" fontSize={18}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
              ipsum fugit a eius fuga, nesciunt, ducimus cupiditate repellat
              tempore reprehenderit, officia delectus?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Events;
