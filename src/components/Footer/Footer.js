import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{bgcolor: '#7DABEF', paddingY: 1.5}}>
      <Container>
        <Typography variant="body2" textAlign={'center'}>
          Copyright © {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
