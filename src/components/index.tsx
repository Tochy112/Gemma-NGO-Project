import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstSection from "./First-section/FirstSection";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
        <FirstSection />
      <Footer />
    </div>
  );
};

export default HomeComponent;
