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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py={10}
      >
        <Typography variant="p"> CONTACT</Typography>
        <Typography variant="h3" py={3}>
          {" "}
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
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            bgcolor="#f4f4f4"
            p={8}
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
            alignItems="center"
            justifyContent="center"
            gap={2}
            bgcolor="#f4f4f4"
            p={8}
          >
            <Fab size="medium">
              <EmailRoundedIcon fontSize="large" rounded />
            </Fab>

            <Box>
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="p">contact@example.com</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            bgcolor="#f4f4f4"
            p={8}
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
            alignItems="center"
            justifyContent="center"
            bgcolor="#f4f4f4"
            p={8}
            gap={5}
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
        <Card>
          <TextField placeholder="Your Name" style={{ width: "900px" }} />
          <br />
          <br />
          <TextField placeholder="Your Email" style={{ width: "900px" }} />
          <br />
          <br />
          <TextareaAutosize
            placeholder=" Message"
            style={{ width: "900px", fontSize: 18, height: "150px" }}
          />{" "}
          <br />
          <Fab variant="extended">Send Message</Fab>
        </Card>
      </Box>
    </div>
  );
}

export default Contact;
