import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroBadge from "../components/HeroBadge";
import HeroHeading from "../components/HeroHeading";
import HeroButtons from "../components/HeroButtons";

export default function Type() {
  useEffect(() => { document.title = "SamType – Home"; }, []);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f6fbff";
    document.body.style.color = darkMode ? "#e2e8f0" : "#111827";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Practice", path: "/TypeMaster" },
    { label: "Results", path: "/Result" },
  ];

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} links={navLinks} />
      <div
        style={{
          minHeight: "calc(100vh - 70px)",
          background: darkMode ? "#0f172a" : "#f6fbff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="container">
          <HeroBadge darkMode={darkMode} />
          <HeroHeading darkMode={darkMode} />
          <HeroButtons />
        </div>
      </div>
      <Footer />
    </>
  );
}