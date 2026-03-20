import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroButtons() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center gap-3 mt-5">
      <button
        className="btn btn-primary px-4 py-2"
        onClick={() => navigate("/TypeMaster")}
        style={{
          maxWidth: "267px",
          background: "#2563eb",
          borderRadius: "14px",
          fontSize: "16px",
          boxShadow: "4px -1px 16px rgba(37,99,235,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        ▶ Start Typing Practice
      </button>
      <button
        className="btn btn-light px-4 py-2"
        style={{
          maxWidth: "267px",
          borderRadius: "14px",
          fontSize: "16px",
          border: "1px solid #e5e7eb",
          whiteSpace: "nowrap",
        }}
        onClick={() => window.open("https://www.wikihow.com/Type-Faster", "_blank")}
      >
        Learn More
      </button>
    </div>
  );
}