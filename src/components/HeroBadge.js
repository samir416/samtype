import React from "react";

export default function HeroBadge({ darkMode }) {
  return (
    <div className="mb-4">
      <span
        style={{
          padding: "6px 31px",
          background: darkMode ? "#1e293b" : "#e0ecff",
          color: "#2563eb",
          borderRadius: "999px",
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "3px",
        }}
      >
        REACT PROJECT
      </span>
    </div>
  );
}