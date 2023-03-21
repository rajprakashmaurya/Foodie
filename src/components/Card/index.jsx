import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React from "react";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

function Cards() {
  return (
    <Grid container bgcolor="#eee" py={10} px={7}>
      <Grid item sm={3} xl={3} data-aos="fade-right">
        <Card
          elevation={5}
          sx={{
            bgcolor: "#e12",
            px: "3.2rem",
            color: "#e1e1e1",
            py: 5,
            width: 260,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: 32, fontWeight: 700, pb: 2, lineHeight: 1 }}
          >
            Why Choose Yummy?
          </Typography>
          <Typography fontSize={18} variant="p" pb={3} lineHeight={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur
            quia eos. Autem tempore quibusdam vel necessitatibus optio ad
            corporis.
          </Typography>
          <br />
          <Box textAlign="center" py={2}>
            <Button variant="contained" color="error">
              learn more
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid
        data-aos="fade-left"
        item
        sm={9}
        xl={9}
        display="flex"
        gap={3}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexWrap="wrap"
      >
        <Box
          bgcolor="white"
          py={8}
          px={4}
          maxWidth={210}
          sx={{
            "&:hover": {
              scale: "1.1",
            },
          }}
        >
          {" "}
          <Box pb={4}>
            <ContentPasteRoundedIcon large fontSize="large" />
          </Box>
          <Typography variant="h5" py="5">
            Corporis voluptates officia eiusmod
          </Typography>
          <br />
          <Typography varient="p">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
            nisi ut aliquip
          </Typography>
        </Box>
        <Box
          bgcolor="white"
          py={8}
          px={3}
          maxWidth={210}
          sx={{
            "&:hover": {
              scale: "1.1",
            },
          }}
        >
          <Box pb={4}>
            <AssignmentTurnedInRoundedIcon fontSize="large" />
          </Box>

          <Typography variant="h5" py="5" lineHeight={1}>
            Corporis voluptates officia eiusmod
          </Typography>
          <br />
          <Typography varient="p">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
            nisi ut aliquip
          </Typography>
        </Box>
        <Box
          bgcolor="white"
          py={8}
          px={3}
          maxWidth={210}
          sx={{
            "&:hover": {
              scale: "1.1",
            },
          }}
        >
          <Box pb={3}>
            <DiamondRoundedIcon fontSize="large" />
          </Box>

          <Typography variant="h5" py="5">
            Corporis voluptates officia eiusmod
          </Typography>
          <br />
          <Typography varient="p">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
            nisi ut aliquip
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Cards;
