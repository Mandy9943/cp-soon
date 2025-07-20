"use client";

import { Clock, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to August 3, 2025
    const targetDate = new Date("2025-08-03T00:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-pink-500/20 relative overflow-hidden mx-2 sm:mx-0">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 animate-pulse"></div>

      {/* Construction icon animation */}
      <div className="absolute top-4 right-4 animate-bounce">
        <Zap className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            🚧 Sitio en Construcción 🚧
          </h2>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
          {[
            { value: timeLeft.days, label: "Días" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-500/30 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
