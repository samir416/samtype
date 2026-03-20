import React from "react";

export default function TypingInput({
  textAreaRef,
  typed,
  isRunning,
  darkMode,
  onChange,
}) {
  return (
    <textarea
      ref={textAreaRef}
      value={typed}
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
      autoComplete="off"
      onChange={onChange}
      placeholder="Start typing here..."
      disabled={!isRunning}
      style={{
        marginTop: "20px",
        width: "100%",
        height: "120px",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
        padding: "16px",
        fontSize: "18px",
        resize: "none",
        fontFamily: "JetBrains Mono, monospace",
        letterSpacing: "0.5px",
        lineHeight: "32px",
        background: darkMode ? "#0f172a" : "#ffffff",
        color: darkMode ? "#e2e8f0" : "#111827",
      }}
    />
  );
}