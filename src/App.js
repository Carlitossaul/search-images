import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/landing/Landing.jsx";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
