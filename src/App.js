import React from "react";
import "./server";
// Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/Vans/VansPage";
import Dashboard from "./pages/Host/HostDashboard";
import Income from "./pages/Host/HostIncome";
import Reviews from "./pages/Host/HostReviews";
import Vans from "./pages/Host/HostVans";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
// Components
import Layout from "./pages/components/Layout";
import LayoutHost from "./pages/components/LayoutHost";
// Templates
import VanDetails from "./pages/templates/VanDetails";
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

            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
