import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Aos from "aos";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Poster from "./components/Poster";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";
import Events from "./components/Events";
import Chefs from "./components/Chef";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Poster />
      <Menu />
      <Testimonial />
      <Events />
      <Chefs />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
