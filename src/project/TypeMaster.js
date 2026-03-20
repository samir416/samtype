import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import TimerDisplay from "./TimerDisplay";
import ParagraphDisplay from "./ParagraphDisplay";
import TypingInput from "./TypingInput";
import TypingControls from "./TypingControls";
import ExitModal from "./ExitModal";

export default function TypeMaster() {
  const navigate = useNavigate();
  const textAreaRef = useRef(null);

  useEffect(() => { document.title = "SamType – Practice"; }, []);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f1f5f9";
    document.body.style.color = darkMode ? "#e2e8f0" : "#111827";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [showExitMenu, setShowExitMenu] = useState(false);
  const [paragraph, setParagraph] = useState("");
  const [typed, setTyped] = useState("");
  const [endTime, setEndTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(60000);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);

  const loadParagraph = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/quotes?limit=5&skip=${Math.floor(Math.random() * 100)}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      const para = data.quotes.map(q => q.quote).join(" ").split(" ").slice(0, 35).join(" ");
      setParagraph(para);
      setTyped("");
    } catch {
      setParagraph("Typing practice improves speed accuracy and focus keep typing regularly to master keyboard skills faster.");
      setTyped("");
    }
  };

  useEffect(() => { loadParagraph(); }, []);
  useEffect(() => { if (isRunning && textAreaRef.current) textAreaRef.current.focus(); }, [isRunning]);

  useEffect(() => {
    let interval;
    if (isRunning && endTime) {
      interval = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        setTime(remaining);
        if (remaining === 0) {
          clearInterval(interval);
          const chars = totalTypedChars === 0 ? typed.length : totalTypedChars;
          const wpm = Math.round((chars / 5) / 1);
          const accuracy = chars > 0 ? Math.round((correctChars / chars) * 100) : 0;
          navigate("/result", { state: { wpm, accuracy, time: 60 } });
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, endTime, totalTypedChars, correctChars, navigate]);

  const handleBack = () => {
    if (!isRunning) { navigate("/"); return; }
    setRemainingTime(endTime - Date.now());
    setIsRunning(false);
    setShowExitMenu(true);
  };

  const handleContinue = () => {
    setEndTime(Date.now() + remainingTime);
    setIsRunning(true);
    setShowExitMenu(false);
    setTimeout(() => textAreaRef.current?.focus(), 100);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTyped(value);
    setTotalTypedChars(value.length);
    let correct = 0;
    for (let i = 0; i < value.length && i < paragraph.length; i++) {
      if (value[i] === paragraph[i]) correct++;
    }
    setCorrectChars(correct);
    if (value.length >= paragraph.length) loadParagraph();
  };

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#0f172a" : "#f1f5f9" }}>
      {/* Navbar */}
      <div style={{
        background: darkMode ? "#1e293b" : "#ffffff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <Logo />
        <TypingControls
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onStart={() => { setEndTime(Date.now() + 60000); setIsRunning(true); }}
          onBack={handleBack}
        />
      </div>

      <TimerDisplay time={time} />

      <div style={{
        maxWidth: "800px", margin: "40px auto",
        background: darkMode ? "#1e293b" : "#ffffff",
        borderRadius: "12px", padding: "24px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}>
        <ParagraphDisplay paragraph={paragraph} typed={typed} darkMode={darkMode} />
        <TypingInput
          textAreaRef={textAreaRef}
          typed={typed}
          isRunning={isRunning}
          darkMode={darkMode}
          onChange={handleChange}
        />
      </div>

      {showExitMenu && (
        <ExitModal
          onContinue={handleContinue}
          onExit={() => navigate("/")}
        />
      )}
    </div>
  );
}