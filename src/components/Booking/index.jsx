import {
  Box,
  Fab,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./booking.css";

function Booking() {
  return (
    <Box px={10} py={10} sx={{ textAlign: "center" }}>
      <Typography variant="p">BOOK A TABLE</Typography>
      <Typography variant="h3" my={3}>
        Book Your Stay With Us
      </Typography>
      <Box display="flex" py={2} flexWrap="wrap">
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
          <TextField placeholder="Your Name" type="text" required />
          <TextField placeholder="Your Email" type="email" required />
          <TextField placeholder="Your Phone" type="text" required />
          <TextField placeholder="Date" type="date" required />
          <TextField placeholder="Time" type="text" required />
          <TextField placeholder="#of people" type="text" required />
          <TextareaAutosize
            placeholder=" Message"
            style={{ width: "450px", fontSize: 18, height: "150px" }}
          />
          <br />
          <Fab color="secondary" variant="extended" onSubmit="submit">
            {" "}
            Book a TAble
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}

export default Booking;
