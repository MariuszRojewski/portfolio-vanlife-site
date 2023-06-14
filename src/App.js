import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
