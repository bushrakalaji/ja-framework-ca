import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet className="container flex-grow-1" />
      <Footer className="footer" />
    </div>
  );
}

Layout();
