import React from "react";

export default function Logo() {
  return (
    <a className="navbar-brand d-flex align-items-center gap-2">
      <div
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#2563eb",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "no-drop" }}
        >
          <path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01" />
          <rect width="20" height="16" x="2" y="4" rx="2" />
        </svg>
      </div>
      <span
        style={{
          color: "#2563eb",
          fontWeight: "600",
          fontSize: "20px",
          cursor: "no-drop",
        }}
      >
        SamType
      </span>
    </a>
  );
}