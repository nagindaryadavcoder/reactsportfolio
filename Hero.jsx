import React from "react";
import bgImage from "../assets/responsive-bg.png"; // use the new image

const Hero = () => {
  return (
    <section
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem 1rem",
    color: "#fff",
    textAlign: "center",
  }}
>
  {/* No need to overlay text again if it's already in image */}
</section>
  );
};

export default Hero;