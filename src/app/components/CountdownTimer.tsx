import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // January 31, 2025 23:59:59 JST
    const endDate = new Date("2025-01-31T23:59:59+09:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-bold">
      <div className="bg-red-500 text-white px-2 py-1 rounded">SALE</div>
      <div className="text-gray-600">終了まで:</div>
      <div className="flex items-center gap-1">
        <span className="bg-gray-100 px-2 py-1 rounded font-mono">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-gray-400">:</span>
        <span className="bg-gray-100 px-2 py-1 rounded font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-gray-400">:</span>
        <span className="bg-gray-100 px-2 py-1 rounded font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-gray-400">:</span>
        <span className="bg-gray-100 px-2 py-1 rounded font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

