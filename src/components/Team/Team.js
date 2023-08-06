import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const memberArr = [
  { name: "John Travolta", job: "CEO" },
  { name: "Lisa Simpson", job: "Sales Manager" },
  { name: "Jenny Rock", job: "FrontEnd Developer" },
  { name: "Dennis McChicken", job: "BackEnd Developer" },
  { name: "Chloie Laurent", job: "UX/UI Designer" },
  { name: "Jack Wolfskin", job: "FrontEnd Developer" },
  { name: "Chris Jameson", job: "FrontEnd Developer" },
  { name: "Boris Morisson", job: "Team Lead" },
];

const Team = () => {
  return (
    <section className="min-h-screen py-12 flex flex-col justify-center items-center">
      <Container>
        <Typography variant="h4" textAlign={"center"} sx={{ pb: 6 }}>
          Meet our team of professionals:
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: { xs: "center", sm: "start" } }}
        >
          {memberArr.map((worker, i) => (
            <Grid
              item
              xs={6}
              sm={4}
              lg={3}
              sx={{ textAlign: "center" }}
              key={i}
            >
              <img
                src={`./assets/images/workers/member-${i + 1}.png`}
                className={`block max-w-[50%] mx-auto transition-all duration-1000`}
                alt=""
              />
              <p className="text-xl pt-2 font-semibold">{worker.name}</p>
              <span className="text-xl">{worker.job}</span>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Team;
