import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import Slider from "react-slick";
import { items } from "./TestimonialData";

var settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Testimonial() {
  return (
    <Box bgcolor="#eeeeee" px={5}>
      <Box textAlign="center" py={3} mt={8}>
        <Typography variant="p"> TESTIMONIALS</Typography>
        <Typography variant="h3"> What Are They Saying About Us</Typography>
      </Box>

      <Slider autoplay="true" infinite="true" {...settings}>
        {/* <div>
          {items.map((item) => (
            <Grid
              container
              spacing={2}
              py={5}
              px={15}
              display="flex !important"
            >
              <Grid item md={8}>
                <Box borderLeft={5} borderColor="red">
                  <Typography ml={3} fontSize="20px" fontStyle="italic">
                    <AlignHorizontalLeftIcon color="error" />
                    {item.description}
                    <AlignHorizontalRightIcon color="error" />
                  </Typography>
                  <Typography ml={3} mt={2} variant="h5" fontWeight="600">
                    {item.title}
                  </Typography>
                  <Typography ml={3}>{item.role}</Typography>
                  <Typography ml={3}>{item.ratting}</Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg"
                  alt="avator"
                  height={200}
                />
              </Grid>
            </Grid>
          ))}
        </div> */}
        <div>
          <Grid container spacing={2} py={5} px={15} display="flex !important">
            <Grid item md={8}>
              <Box borderLeft={5} borderColor="red">
                <Typography ml={3} fontSize="20px" fontStyle="italic">
                  <AlignHorizontalLeftIcon color="error" />
                  &nbsp; Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora <br />
                  entum suscipit rhoncus. Accusantium quam, ultricies eget id,
                  <br />
                  aliquam eget nibh et. Maecen aliquam, risus at semper &nbsp;
                  <AlignHorizontalRightIcon color="error" />
                </Typography>
                <Typography ml={3} mt={2} variant="h5" fontWeight="600">
                  Sara Wilson
                </Typography>
                <Typography ml={3}>Designer</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <img
                style={{ borderRadius: "50%" }}
                src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg"
                alt="avator"
                height={200}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} py={5} px={15} display="flex !important">
            <Grid item md={8}>
              <Box borderLeft={5} borderColor="red">
                <Typography ml={3} fontSize="20px" fontStyle="italic">
                  <AlignHorizontalLeftIcon color="error" />
                  &nbsp; Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora <br />
                  entum suscipit rhoncus. Accusantium quam, ultricies eget id,
                  <br />
                  aliquam eget nibh et. Maecen aliquam, risus at semper &nbsp;
                  <AlignHorizontalRightIcon color="error" />
                </Typography>
                <Typography ml={3} mt={2} variant="h5" fontWeight="600">
                  Sara Wilson
                </Typography>
                <Typography ml={3}>Designer</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <img
                style={{ borderRadius: "50%" }}
                src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg"
                alt="avator"
                height={200}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} py={5} px={15} display="flex !important">
            <Grid item md={8}>
              <Box borderLeft={5} borderColor="red">
                <Typography ml={3} fontSize="20px" fontStyle="italic">
                  <AlignHorizontalLeftIcon color="error" />
                  &nbsp; Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora <br />
                  entum suscipit rhoncus. Accusantium quam, ultricies eget id,
                  <br />
                  aliquam eget nibh et. Maecen aliquam, risus at semper &nbsp;
                  <AlignHorizontalRightIcon color="error" />
                </Typography>
                <Typography ml={3} mt={2} variant="h5" fontWeight="600">
                  Sara Wilson
                </Typography>
                <Typography ml={3}>Designer</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <img
                style={{ borderRadius: "50%" }}
                src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg"
                alt="avator"
                height={200}
              />
            </Grid>
          </Grid>
        </div>
      </Slider>
    </Box>
  );
}

export default Testimonial;
