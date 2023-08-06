import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <div className="flex flex-col items-center text-center sm:text-left">
        <Typography variant="h3" color={"#FFF"}>
          Bring your ideas to life with us
        </Typography>
        <Link
          to={"/contact"}
          className="mt-12 inline-flex px-6 py-3 items-center text-white gap-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Contact Us
          <ArrowRightAltIcon
            sx={{
              fontSize: 24,
            }}
          />
        </Link>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full top-0 left-0 object-cover overflow-hidden -z-10`}
        >
          <source src="/assets/videos/hero.mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
