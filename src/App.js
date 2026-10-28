
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeBlock, setActiveBlock] = useState("9–10 AM");

  const timeBlocks = [
    "6–7 AM",
    "9–10 AM",
    "12–1 PM",
    "5–6 PM",
    "9–10 PM",
  ];

  return (
    <main className="page">
      <section className="quiz-card">
        <div className="countdown">
          <span className="timer-icon">◴</span>
          <span>Block ends</span>
          <strong>35min: 59sec</strong>
        </div>

        <div className="greeting">
          <span className="ndewo">Ndewo!</span>

          <div className="illustration">
            <div className="cup">
              <span>×</span>
            </div>
          </div>

          <span className="biko">Biko chere</span>
        </div>

        <h1>
          You’re in the hour. The quiz is not open yet.
        </h1>

        <h2 className="subtitle">
          You’re in the 9–10 AM block.
        </h2>

        <div className="participants">
          <div className="avatars">
            <span className="avatar you">You</span>
            <span className="avatar">F</span>
            <span className="avatar">J</span>
            <span className="avatar">J</span>
          </div>
          <strong>You and 18 others are here</strong>
        </div>

        <div className="instructions">
          <p>
            <span className="bullet">●</span>
            Being here does not open the questions.
          </p>

          <p>
            <span className="bullet">●</span>
            They appear once, for 15 minutes, at a
            random time in this hour.
          </p>

          <p>
            <span className="bullet">●</span>
            If you don’t see them, check again in
            5 minutes. No reminder is sent.
          </p>
        </div>

        <div className="time-blocks">
          {timeBlocks.map((block) => (
            <button
              key={block}
              className={`time-block ${
                activeBlock === block ? "active" : ""
              } ${block === "6–7 AM" ? "completed" : ""}`}
              onClick={() => setActiveBlock(block)}
            >
              <strong>{block}</strong>

              {activeBlock === block ? (
                <span>NOW</span>
              ) : block === "6–7 AM" ? (
                <span className="checkmark">✓</span>
              ) : null}
            </button>
          ))}
        </div>

        <button className="check-again" disabled>
          <span>⟳</span> Check again in 3:57
        </button>

        <button
          className="back-button"
          onClick={() =>
            alert("Connect this button to your Activity Board.")
          }
        >
          Back to Activity Board
        </button>
      </section>
    </main>
  );
}

export default App;
