import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function LayoutVans() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-van-detail-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Inforamtion
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default LayoutVans;
