import React from "react";
import "./index.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Events() {
  return (
    <div id="Events">
      <Box py={10}>
        <Box textAlign="center">
          <Typography variant="p" color="gray">
            EVENTS
          </Typography>
          <Typography variant="h3" my={2} textAlign="center">
            Share Your Moments In Our Restaurant
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={3}
          my={5}
        >
          <Box className="event1" color="white" position="relative">
            <Box
              px={3}
              pb={3}
              style={{ position: "absolute", bottom: "0", left: "0" }}
            >
              <Typography variant="h5" pt={2} fontWeight={800}>
                Custom Parties
              </Typography>
              <Typography fontWeight={700} variant="h4" py={2}>
                $99
              </Typography>
              <Typography variant="p" fontSize={18}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
                ipsum fugit a eius fuga, nesciunt.
              </Typography>
            </Box>
          </Box>
          <Box className="event2" color="white" position="relative">
            <Box
              px={3}
              pb={3}
              style={{ position: "absolute", bottom: "0", left: "0" }}
            >
              <Typography variant="h5" pt={2} fontWeight={800}>
                Private Parties
              </Typography>
              <Typography fontWeight={700} variant="h4" py={2}>
                $298
              </Typography>
              <Typography variant="p" fontSize={18}>
                Dolor ipsum sit amet consectetur adipisicing elit. Nulla
                expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
                ipsum fugit a eius fuga, nesciunt.
              </Typography>
            </Box>
          </Box>
          <Box className="event3" color="white" position="relative">
            <Box
              px={3}
              pb={3}
              style={{ position: "absolute", bottom: "0", left: "0" }}
            >
              <Typography variant="h5" pt={2} fontWeight={800}>
                Birthday Parties
              </Typography>
              <Typography fontWeight={700} variant="h4" py={2}>
                $499
              </Typography>
              <Typography variant="p" fontSize={18}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                expedita atque mollitia nostrum eveniet. Eligendi, quod! Minima
                ipsum fugit a eius fuga, nesciunt.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
export default Events;
