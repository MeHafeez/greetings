import React, { useState, useEffect } from "react";
import { Lock, Clipboard, RefreshCcw } from "lucide-react";
import "./App.css";

const SecretMessageApp = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCopyNote, setShowCopyNote] = useState(false);
  const [textarea, setTextarea] = useState(false);
  const [error, setError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const listOfNames = [
    "kulsum",
    "sultana",
    "sultana shaik",
    "sultana sk",
    "sk sultana",
    "kulsum shaik",
    "shaik kulsum",
    "sk kulsum",
    "kulsum sk",
    "shaik kulsum sultana",
    "sk kulsum sultana",
    "kulsum sultana",
    "sultana kulsum",
    "kulsum sultana sk",
    "kulsum sultana shaik",
    "sultana kulsum sk",
    "sultana kulsum shaik",
    "kulsum_sultana3873",
  ];

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Name field cannot be empty");
      return;
    }
    setError("");

    const isValidName = listOfNames.includes(name.toLowerCase());
    const secretMessage = "U29ycnksIHRoaXMgaW5mb3JtYXRpb24gd2FzI";

    setMessage(secretMessage);
    setShowCopyNote(false);
    setShowConfetti(isValidName);

    const handleCopy = (event) => {
      event.clipboardData.setData(
        "text/plain",
        isValidName
          ? `Hi ${name}, How about grabbing a coffee or tea sometime? It’d be nice have some coffee or tea. 😊`
          : `Sorry ${name}, this message wasn't meant for you! Hope you have a great day though! 😊😉`
      );
      event.preventDefault();
    };
    document.addEventListener("copy", handleCopy);
  };

  const handleRefresh = () => {
    setName("");
    setMessage("");
    setShowCopyNote(false);
    setTextarea(false);
    setError("");
    setShowConfetti(false);
  };

  useEffect(() => {
    if (showConfetti) {
      const body = document.body;
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti-piece";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = `${Math.random()}s`;
        body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }
    }
  }, [showConfetti]);

  return (
    <div className="secret-message-container">
      {/* <div className="secret-message-wrapper">
        <h1 className="secret-message-title text-2xl md:text-4xl">Hi There!</h1>
        <p>To proceed enter your name....</p>
        <div className="space-y-4 mt-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="secret-message-input"
          />
          {error && <p className="error-message fade-in">{error}</p>}

          <button onClick={handleSubmit} className="secret-message-button">
            <Lock className="mr-2" /> Generate Secret Code
          </button>

          {message && (
            <button
              onClick={handleRefresh}
              className="secret-message-button refresh-button"
            >
              <RefreshCcw className="mr-2" /> Refresh
            </button>
          )}
        </div>

        {message && (
          <>
            <div className="secret-message-output mt-4">
              <span className="truncate mr-2">{message}</span>
            </div>
            <div className="secret-message-note mt-4">
              Try copying the text above and pasting it somewhere! 📋
            </div>
          </>
        )}

        {showCopyNote && (
          <div className="secret-message-note mt-4">
            <Clipboard className="inline-block mr-2" /> Copy and paste the
            message in a notepad
          </div>
        )}

        {textarea && (
          <div className="text-area-wrapper">
            <textarea className="secret-textarea" readOnly></textarea>
          </div>
        )}
      </div> */}
      <h1>{'Thanks for your time'}</h1>
    </div>
  );
};

export default SecretMessageApp;
