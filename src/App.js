import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Poster from "./components/Poster";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Poster />
      <Menu />
    </div>
  );
}

export default App;
