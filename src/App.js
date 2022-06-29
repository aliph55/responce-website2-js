import React from "react";
import About from "./components/About";
import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Support from "./components/Support";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Support />
      <Pricing />
      <Fotter />
    </div>
  );
};

export default App;
