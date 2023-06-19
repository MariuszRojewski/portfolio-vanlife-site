import React from "react";
import "./server";
// Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/Vans/VansPage";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Vans from "./pages/Host/Vans";
// Components
import LayoutHost from "./pages/components/LayoutHost";
import VanDetails from "./pages/templates/VanDetails";
import Layout from "./pages/components/Layout";
import HostVanDetails from "./pages/templates/HostVanDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<LayoutHost />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
