import { FC, useState, useEffect } from "react";
import "./Countdown.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getPlural = (
  number: number,
  singular: string,
  plural2to4: string,
  plural5plus: string
): string => {
  if (number === 1) return singular;
  if (number >= 2 && number <= 4) return plural2to4;
  return plural5plus;
};

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
        <label>{getPlural(timeLeft.days, "Den", "Dny", "Dní")}</label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <label>{getPlural(timeLeft.hours, "Hodina", "Hodiny", "Hodin")}</label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <label>
          {getPlural(timeLeft.minutes, "Minuta", "Minuty", "Minut")}
        </label>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <label>
          {getPlural(timeLeft.seconds, "Sekunda", "Sekundy", "Sekund")}
        </label>
      </div>
    </div>
  );
};

export default Countdown;
