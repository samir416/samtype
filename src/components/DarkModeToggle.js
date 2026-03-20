import React from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: darkMode ? "#111827" : "#e5e7eb",
        color: darkMode ? "white" : "black",
        border: "none",
        padding: "6px 14px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {darkMode ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}