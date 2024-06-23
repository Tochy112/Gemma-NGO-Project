import React from "react";
import Slider from "./Slider";
import FirstSection from "./First-section/FirstSection";
import ThirdSection from "./Third-section/ThirdSection";

const HomeComponent = () => {
  return (
    <div>
      <FirstSection />
      <Slider />
      <ThirdSection />
    </div>
  );
};

export default HomeComponent;
