import { useState, useEffect } from "react";

const TARGET = new Date("2027-05-31T00:00:00+05:30").getTime();

export default function useCountdown() {
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const updateCountdown = () => setDiff(TARGET - Date.now());
    updateCountdown();
    const id = setInterval(updateCountdown, 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, diff);
  return {
    days: Math.floor(ms / 864e5),
    hours: Math.floor((ms % 864e5) / 36e5),
    minutes: Math.floor((ms % 36e5) / 6e4),
    seconds: Math.floor((ms % 6e4) / 1e3),
  };
}
