import {
  Box,
  Fab,
  Hidden,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./booking.css";

function Booking() {
  return (
    <Box
      px={10}
      py={10}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="p">BOOK A TABLE</Typography>
      <Typography variant="h3" my={4}>
        Book Your Stay With Us
      </Typography>
      <Box display="flex" gap={5} py={2} flexWrap="wrap">
        <Box className="booking">
          <img
            style={{ height: "100%", width: "100%", overflow: "hidden" }}
            src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/reservation.jpg"
          />
        </Box>
        <Box
          className="booking2"
          bgcolor="#f7f7f7"
          overflow="hidden"
          p={10}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField placeholder="Your Name" />
          <TextField placeholder="Your Email" />
          <TextField placeholder="Your Phone" />
          <TextField placeholder="Date" />
          <TextField placeholder="Time  " />
          <TextField placeholder="#of people" />
          <TextareaAutosize
            placeholder=" Message"
            style={{ width: "450px", fontSize: 18, height: "150px" }}
          />{" "}
          <br />
          <Fab color="secondary" variant="extended">
            {" "}
            Book a TAble
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}

export default Booking;
