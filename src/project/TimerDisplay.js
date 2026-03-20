import React from "react";

export default function TimerDisplay({ time }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontSize: "36px",
        fontWeight: "700",
        color: "#2563eb",
      }}
    >
      00:{time < 10 ? `0${time}` : time}
    </div>
  );
}