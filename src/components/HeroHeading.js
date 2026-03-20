import React from "react";

export default function HeroHeading({ darkMode }) {
  return (
    <>
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "800",
          color: darkMode ? "#e2e8f0" : "#111827",
          lineHeight: "1.15",
        }}
      >
        Master the Art of <br />
        <span style={{ color: "#2563eb" }}>Touch Typing</span>
      </h1>
      <p
        style={{
          marginTop: "24px",
          fontSize: "18px",
          color: darkMode ? "#94a3b8" : "#9ca3af",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.8",
        }}
      >
        Improve your typing speed and accuracy with our simple,
        distraction-free practice tool. Designed for students, completely free.
      </p>
    </>
  );
}