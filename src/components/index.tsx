import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import FirstSection from "./First-section/FirstSection";
import ThirdSection from "./Third-section/ThirdSection";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Slider />
      <ThirdSection />
      <Footer />
    </div>
  );
};

export default HomeComponent;
