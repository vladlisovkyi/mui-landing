import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        py: 16,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <img
            src="./assets/images/about.webp"
            alt=""
            className="md:max-w-xl rounded-2xl"
          />

          <Typography sx={{ mt: { sm: 2, lg: 8 } }}>
            <Typography variant="h4" textAlign={"center"}>
              Our Story
            </Typography>
            Our Story Established with a vision to revolutionize the IT
            industry, Dews has been serving clients across various sectors since
            2017. What sets us apart is not just our technical prowess, but our
            unwavering focus on understanding your unique business challenges
            and crafting tailor-made solutions that drive growth and efficiency.
            <Typography variant="h4" sx={{ my: 2 }} textAlign={"center"}>
              Our Mission
            </Typography>
            Our mission is to empower businesses with transformative technology
            solutions that propel them forward in today's rapidly evolving
            digital landscape. We believe in harnessing the power of innovation
            to create solutions that are both impactful and sustainable, while
            always keeping our clients' needs at the forefront of our
            strategies.
          </Typography>
        </Box>
      </Container>
    </Stack>
  );
};

export default About;
