import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Chefs() {
  return (
    <div id="Chefs">
      <Box
        textAlign="center"
        py={10}
        px={5}
        bgcolor="#f2f2f2"
        data-aos="fade-up"
      >
        <Typography variant="p">CHEFS</Typography>
        <Typography variant="h3" my={3} fontFamily="Amatic SC, cursive">
          Our Proffesional Chefs
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
          <Card
            sx={{
              maxWidth: 400,
              "&:hover": {
                scale: "1.1",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-1.jpg"
                alt="chefs"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Walter White
                </Typography>
                <Typography variant="h6" color="Gray">
                  Master Chef
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              maxWidth: 400,
              "&:hover": {
                scale: "1.1",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-2.jpg"
                alt="chefs"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Sarah Jhonson
                </Typography>
                <Typography variant="h6" color="Gray">
                  Patissier
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quo esse repellendus quia id. Est eum et accusantium pariatur
                  fugit nihil minima suscipit corporis. Voluptate sed quas
                  reiciendis animi neque sapiente.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              maxWidth: 400,
              "&:hover": {
                scale: "1.1",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-3.jpg"
                alt="chefs"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  William Anderson
                </Typography>
                <Typography variant="h6" color="Gray">
                  Cook
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vero omnis enim consequatur. Voluptas consectetur unde qui
                  molestiae deserunt. Voluptates enim aut architecto porro
                  aspernatur molestiae modi.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default Chefs;
