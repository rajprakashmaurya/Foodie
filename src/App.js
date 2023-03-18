import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Poster from "./components/Poster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Poster />
      <Menu />
    </div>
  );
}

export default App;
