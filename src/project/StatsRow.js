import React from "react";

export default function StatsRow({ darkMode, wpm, accuracy, time }) {
  const subtle = darkMode ? "#94a3b8" : "#6b7280";
  return (
    <div className="row text-center my-4">
      <div className="col">
        <h3 className="text-primary fw-bold">{wpm}</h3>
        <small style={{ color: subtle }}>WPM</small>
      </div>
      <div className="col">
        <h3 className="text-primary fw-bold">{accuracy}%</h3>
        <small style={{ color: subtle }}>Accuracy</small>
      </div>
      <div className="col">
        <h3 className="text-primary fw-bold">{time}s</h3>
        <small style={{ color: subtle }}>Time</small>
      </div>
    </div>
  );
}