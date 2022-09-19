import React from "react";
import { Footer } from "./pages/Footer";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./pages/NavBar";
import { AppTheme } from "./theme/AppTheme";



export const LandingApp = () => {
  return (
    <AppTheme>
      <NavBar />
      <LandingPage />
      <Footer />
    </AppTheme>
  )
}
