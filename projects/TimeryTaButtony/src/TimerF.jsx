import React, { Components, useState, useEffect } from "react";

export default function TimerF() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const savedSeconds = localStorage.getItem("seconds");

    if (savedSeconds) {
      setSeconds(Number(savedSeconds));
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    localStorage.removeItem("seconds");
  };

  return (
    <div>
      <h2>Timer: {seconds}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

 