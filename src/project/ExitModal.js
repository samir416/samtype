import React from "react";

export default function ExitModal({ onContinue, onExit }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h4>Continue Test?</h4>
        <p>Your timer is paused.</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={onContinue}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
            }}
          >
            Continue
          </button>
          <button
            onClick={onExit}
            style={{
              background: "#e5e7eb",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
            }}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}