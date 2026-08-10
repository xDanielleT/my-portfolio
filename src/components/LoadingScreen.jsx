import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Danielle Turner / developer & foodie";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 900);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Typing text — scales with the viewport so the 36-character string
          never overflows a narrow phone screen */}
      <p
        className="font-mono-dm mb-8 text-center tracking-wide sm:tracking-widest"
        style={{ color: "var(--paper)", fontSize: "clamp(0.75rem, 3.4vw, 1.5rem)" }}
      >
        {text}
        <span className="animate-blink ml-1" style={{ color: "var(--rust)" }}>|</span>
      </p>

      {/* Progress bar */}
      <div
        className="w-40 sm:w-48 h-px relative overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <div
          className="absolute top-0 left-0 h-full w-16 animate-load-bar"
          style={{ backgroundColor: "var(--rust)" }}
        />
      </div>
    </div>
  );
};