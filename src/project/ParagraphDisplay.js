import React from "react";

export default function ParagraphDisplay({ paragraph, typed, darkMode }) {
  return (
    <div
      style={{
        background: darkMode ? "#334155" : "#eef2ff",
        padding: "20px",
        borderRadius: "10px",
        minHeight: "120px",
        color: darkMode ? "#e2e8f0" : "#6b7280",
        overflow: "hidden",
      }}
    >
      {paragraph.split("").map((char, index) => {
        let color = "#6b7280";
        if (index < typed.length) {
          color = typed[index] === char ? "#22c55e" : "#ef4444";
        }
        return (
          <span
            key={index}
            style={{
              color,
              fontWeight: index === typed.length ? "700" : "400",
              background:
                index === typed.length
                  ? "rgba(37,99,235,0.25)"
                  : "transparent",
              transition: "color 0.2s ease, background 0.2s ease",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}