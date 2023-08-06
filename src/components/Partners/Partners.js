import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Partners = () => {
  const [items, setItems] = useState([
    "html",
    "css",
    "js",
    "react",
    "tailwind",
    "redux",
  ]);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const firstItem = updatedItems.shift();
        if (firstItem) updatedItems.push(firstItem);
        return updatedItems;
      });
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLine((prev) => {
        const nextLine = prev + 11;
        if (nextLine >= 100) {
          return 0;
        }
        return nextLine;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="min-h-screen py-12">
      <Container>
        <Typography variant="h4" textAlign={"center"} sx={{ mb: 8 }}>
          Technologies we use
        </Typography>
        <Accordion
          sx={{ mb: 3, bgcolor: "#f0f4fa", boxShadow: "none", py: 1.25 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ border: "none" }}
          >
            <Typography>Our Frontend Techs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our frontend development team uses the latest technologies and
              frameworks to create responsive and visually appealing user
              interfaces. We focus on creating a seamless and engaging user
              experience that aligns with your brand identity.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ mb: 3, bgcolor: "#deebff", boxShadow: "none", py: 1.25 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> Our Backend Techs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our backend development team ensures that your applications have
              robust and scalable architecture. We utilize various server-side
              technologies to handle data management, user authentication, and
              API integrations, providing a solid foundation for your
              application.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ mb: 3, bgcolor: "#ceddf5", boxShadow: "none", py: 1.25 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Our IOS Techs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our iOS development team specializes in creating feature-rich and
              user-friendly applications for Apple devices. We leverage the
              power of Swift and SwiftUI to build apps that are not only
              visually appealing but also performant and optimized for the iOS
              ecosystem.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            mt: 12,
            gap: 6,
          }}
        >
          <p className="text-lg border-b-2 pb-2 md:border-b-0 md:pb-0 md:border-r-2 md:pr-4 md:mr-7">
            Tech Stack
          </p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 place-items-center relative pb-4">
            {items.map((item, index) => (
              <img
                key={item}
                className={`array-item ${
                  index === 0 || index === items.length - 1 ? "transition" : ""
                }`}
                width={80}
                loading="lazy"
                src={`./assets/images/techs/${item}.svg`}
                alt={item}
              />
            ))}
            <div
              className="line h-[2px] absolute left-0 bottom-0 bg-blue-300 transition-all duration-1000"
              style={{ width: `${line}%` }}
            ></div>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Partners;
