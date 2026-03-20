import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResultCard from "./ResultCard";

export default function Result() {
  const { state } = useLocation();

  useEffect(() => { document.title = "SamType – Result"; }, []);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f1f5f9";
    document.body.style.color = darkMode ? "#e2e8f0" : "#111827";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Practice", path: "/TypeMaster" },
    { label: "Results" },
  ];

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} links={navLinks} />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", background: darkMode ? "#0f172a" : "#f1f5f9" }}
      >
        <ResultCard
          darkMode={darkMode}
          wpm={state?.wpm}
          accuracy={state?.accuracy}
          time={state?.time}
        />
      </div>
    </>
  );
}