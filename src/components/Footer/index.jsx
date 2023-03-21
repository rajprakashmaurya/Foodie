import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box margin="auto" px={10} bgcolor="#263238" color="white">
      <Grid container spacing={2} my={5}>
        <Grid item md={3}>
          <Typography variant="h6" fontWeight={600}>
            Address
          </Typography>
          <Typography>A108 Adam Street</Typography>
          <Typography>New York, NY 535022 - US</Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" fontWeight={600}>
            Reservations
          </Typography>
          <Typography>Phone: +1 5589 55488 55</Typography>
          <Typography>Email: info@example.com</Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" fontWeight={600}>
            Opening Hours
          </Typography>
          <Typography>Mon-Sat: 11AM - 23PM</Typography>
          <Typography>Sunday: Closed</Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h6" fontWeight={600}>
            Follow Us
          </Typography>
          <Typography>A108 Adam Street</Typography>
          <Typography>New York, NY 535022 - US</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: "white" }} />

      <Box py={5} textAlign="center">
        <Typography> © Copyright Yummy. All Rights Reserved</Typography>
        <Typography>Designed by BootstrapMade</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
