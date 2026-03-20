import React from "react";
import StatsRow from "./StatsRow";
import ResultButtons from "./ResultButtons";

export default function ResultCard({ darkMode, wpm, accuracy, time }) {
  return (
    <div
      className="card shadow-lg text-center p-4"
      style={{
        width: "420px",
        borderRadius: "14px",
        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
        color: darkMode ? "#e2e8f0" : "#111827",
      }}
    >
      <div className="mb-3">
        <div
          className="mx-auto mb-2"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#16a34a",
          }}
        >
          ✓
        </div>
        <h4 className="fw-bold">Great Job 🎉🎉!</h4>
        <p style={{ color: darkMode ? "#94a3b8" : "#6b7280" }}>
          Here is how you performed in this session.
        </p>
      </div>
      <StatsRow darkMode={darkMode} wpm={wpm} accuracy={accuracy} time={time} />
      <ResultButtons />
    </div>
  );
}