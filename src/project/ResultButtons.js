import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResultButtons() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="btn btn-light px-4" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <button
        className="btn btn-primary px-4"
        onClick={() => navigate("/TypeMaster")}
      >
        Restart Test
      </button>
    </div>
  );
}