import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const About = () => {
  return (
    <Box minHeight="100vh" my={8} mx={8} bgcolor="#ffffff">
      <Box textAlign="center" data-aos="fade-up">
        <Typography variant="p" color="gray" fontSize={15}>
          ABOUT US
        </Typography>
        <Typography variant="h3" fontFamily="Amatic SC" fontWeight={500} py={2}>
          LEARN MORE ABOUT US
        </Typography>
      </Box>
      <Grid data-aos="fade-up" container display="flex" mt={4} spacing={3}>
        <Grid item sm={12} md={7} xl={7} overflow="hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/about.jpg"
            alt="image"
            loading="lazy"
          />
        </Grid>
        <Grid item sm={12} md={5} xl={5} px={2}>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <List>
            <ListItem>
              <DoneAllIcon />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </ListItem>
            <ListItem>
              <DoneAllIcon />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </ListItem>
            <ListItem>
              <DoneAllIcon start={0} />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </ListItem>
          </List>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
          <Box
            mt={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <video
              controls
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
              height={290}
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
