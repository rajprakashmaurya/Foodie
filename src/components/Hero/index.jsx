import { Box, Fab, Grid, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Hero() {
  return (
    <Box
      bgcolor="#eeeeee"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      id="Home"
    >
      <Grid container>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h2" fontFamily="Amatic SC" fontWeight={600}>
            Enjoy Your Healthy <br />
            Delicious Food
          </Typography>
          <Typography variant="body2" py={3}>
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </Typography>
          <Box display="flex" gap={5}>
            <Fab variant="extended" sx={{ bgcolor: "#ce1212" }}>
              Book A Table
            </Fab>
            <Fab variant="extended" sx={{ bgcolor: "#ffffff7" }}>
              <PlayCircleIcon color="success" />
              Watch video
            </Fab>
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            data-aos="zoom-out"
            src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png"
            loading="lazy"
            height="450"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
