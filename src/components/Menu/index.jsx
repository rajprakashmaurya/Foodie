import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { items, listItems } from "./menuData";

function Menu() {
  const [activeMenu, setActiveMenu] = useState("Staters");
  return (
    <div id="Menu">
      <Box my={10} data-aos="fade-up">
        <Grid>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="centre"
            textAlign="center"
          >
            <Typography variant="p" color="gray" fontSize={15}>
              OUR MENU
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Amatic SC"
              fontWeight={500}
              py={2}
              underline="hover"
            >
              Check Our Yummy Menu
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="centre"
            justifyContent="center"
            gap={4}
            fontSize={25}
            underline="hover"
          >
            {items.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  borderBottom: "2px solid #fff",
                  borderColor: item.title == activeMenu ? "red" : "gray",
                  "&:hover": {
                    cursor: "pointer",
                    color: "red",
                  },
                }}
                onClick={() => setActiveMenu(item.title)}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
          <Box
            display="flex"
            alignItems="centre"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            my={2}
          >
            <Typography variant="p" color="gray" fontSize={15}>
              MENU
            </Typography>
            <Typography variant="h4" pb={3}>
              {activeMenu}
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              px={10}
              justifyContent="space-between"
              gap={3}
            >
              {listItems.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Menu;
