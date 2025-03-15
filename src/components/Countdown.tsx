import { FC, useState, useEffect } from "react";
import "./Countdown.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft | null => {
  const weddingDate = new Date("2025-06-21T12:00:00");
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return null; // Return null if the wedding date has passed
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null; // Don't render anything if time is up
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <label>Dní</label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <label>Hodin</label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <label>Minut</label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <label>Sekund</label>
      </div>
    </div>
  );
};

export default Countdown;
