import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function TypingControls({
  darkMode,
  setDarkMode,
  onStart,
  onBack,
}) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <button
        onClick={onStart}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "6px 14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Start
      </button>
      <button
        onClick={onBack}
        style={{
          background: "#e5e7eb",
          border: "none",
          padding: "6px 14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
}