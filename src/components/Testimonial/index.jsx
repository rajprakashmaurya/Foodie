import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import Slider from "react-slick";
import { BorderColor } from "@mui/icons-material";

function Testimonial() {
  return (
    <Box
      bgcolor="#eeeeee"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
    >
      <Typography variant="p"> TESTIMONIALS</Typography>
      <Typography variant="h3"> What Are They Saying About Us</Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        px={30}
        my={15}
      >
        <Box borderLeft={3} px={4}>
          <Typography variant="p" fontSize={16} fontStyle="italic">
            <AlignHorizontalLeftIcon />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            omnis laudantium suscipit vero inventore, consequatur voluptas
            temporibus, ipsum quam eius amet. Voluptatum esse hic quo voluptates
            ipsam quas tenetur doloremque?
            <AlignHorizontalRightIcon />
          </Typography>
          <Typography variant="h5" fontWeight={600} mt={2}>
            Sara Wilison
          </Typography>
          <Typography variant="p" color="gray">
            Ceo and Founder
          </Typography>
          <Typography variant="h6" mt={1}>
            {" "}
            ⭐⭐⭐⭐⭐
          </Typography>
        </Box>
        <Box>
          <img
            style={{ borderRadius: "50%" }}
            src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg"
            alt="avator"
            height={200}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
