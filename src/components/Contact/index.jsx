import {
  Box,
  Card,
  Fab,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import GoogleMapReact from "google-map-react";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

function Contact() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div id="Contact">
      <Box textAlign="center" py={10} data-aos="fade-up">
        <Typography variant="p"> CONTACT</Typography>
        <Typography variant="h3" py={3} fontFamily="Amatic SC, cursive">
          Need Help? Contact Us
        </Typography>
        {/* <Box style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </Box> */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          my={4}
          gap={5}
        >
          <Box
            display="flex"
            bgcolor="#f4f4f4"
            p={4}
            sx={{
              minWidth: "500px",
              height: "80px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Fab size="medium">
              <ImportContactsIcon fontSize="large" rounded />
            </Fab>

            <Box>
              <Typography variant="h6">Our Address</Typography>
              <Typography variant="p">
                A108 Adam Street, New York, NY 535022
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            bgcolor="#f4f4f4"
            p={4}
            sx={{
              minWidth: "500px",
              height: "80px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Fab size="medium">
              <EmailRoundedIcon fontSize="large" rounded />
            </Fab>

            <Box>
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="p">contact@example.com</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          my={4}
          gap={5}
        >
          <Box
            display="flex"
            bgcolor="#f4f4f4"
            p={4}
            sx={{
              minWidth: "500px",
              height: "80px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Fab size="medium">
              <CallRoundedIcon fontSize="large" rounded />
            </Fab>

            <Box>
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="p">+1 5589 55488 55</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            bgcolor="#f4f4f4"
            p={4}
            sx={{
              minWidth: "500px",
              height: "80px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Fab size="medium">
              <ShareRoundedIcon fontSize="large" rounded />
            </Fab>

            <Box>
              <Typography variant="h6">Opening Hours</Typography>
              <Typography variant="p">
                <strong>Mon-Sat</strong>: 11AM - 23PM; <strong>Sunday</strong>:
                Closed
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box px={20}>
          <Card elevation="1">
            <TextField
              type="text"
              placeholder="Your Name"
              style={{ width: "900px" }}
            />
            <br />
            <br />
            <TextField
              type="email"
              placeholder="Your Email"
              style={{ width: "900px" }}
            />
            <br />
            <br />
            <TextareaAutosize
              placeholder=" Message"
              style={{ width: "900px", fontSize: 18, height: "150px" }}
            />{" "}
            <br />
            <Box py={3}>
              <Fab variant="extended">Send Message</Fab>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
