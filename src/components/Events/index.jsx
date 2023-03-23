import React from "react";
import "./index.css";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Slider from "react-slick";

var settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Events() {
  return (
    <div id="Events">
      <Box my={10} data-aos="fade-up">
        <Box textAlign="center">
          <Typography variant="p" color="gray">
            EVENTS
          </Typography>
          <Typography
            variant="h3"
            my={2}
            fontFamily="Amatic SC, cursive"
            textAlign="center"
          >
            Share Your Moments In Our Restaurant
          </Typography>
        </Box>

        <Slider autoplay="true" infinite="true" {...settings}>
          <div>
            <Grid
              bgcolor="black"
              className="event1"
              color="white"
              position="relative"
            >
              <Grid
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
                  expedita atque mollitia nostrum eveniet. Eligendi, quod!
                  Minima ipsum fugit a eius fuga, nesciunt.
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid className="event2" color="white" position="relative">
              <Grid
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
                  expedita atque mollitia nostrum eveniet. Eligendi, quod!
                  Minima ipsum fugit a eius fuga, nesciunt.
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid className="event3" color="white" position="relative">
              <Grid
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
                  expedita atque mollitia nostrum eveniet. Eligendi, quod!
                  Minima ipsum fugit a eius fuga, nesciunt.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </Box>
    </div>
  );
}
export default Events;
