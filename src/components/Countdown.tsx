/**
 * A countdown timer component that displays remaining time in minutes and seconds.
 * The component automatically formats the display and handles theme-based styling.
 *
 * @component
 * @param {Object} props
 * @param {number} props.countdown - The countdown time in milliseconds
 * @param {() => void} props.reset - Function to reset the countdown timer
 *
 * @example
 * ```tsx
 * <Countdown
 *   countdown={120000}
 *   reset={() => setTimer(initialTime)}
 * />
 * ```
 */

import { useEffect } from "react";
import { useThemeContext } from "../hooks/useTheme";

type CountdownProps = {
  countdown: number;
  reset: () => void;
};

const Countdown = ({ countdown, reset }: CountdownProps) => {
  useEffect(() => {
    reset();
    console.log("DEBUG: Component Countdown was called.");
  }, [reset]);

  const formatedCountdown = {
    minutes: new Date(countdown).getUTCMinutes(),
    seconds: new Date(countdown).getUTCSeconds(),
  };

  const { systemTheme } = useThemeContext();

  return (
    <div className="flex justify-end">
      <div
        className=" rounded-lg p-3"
        style={{
          backgroundColor: systemTheme.background.secondary,
        }}
      >
        <span
          className="text-right font-mono text-lg lg:text-xl"
          style={{
            color: systemTheme.text.secondary,
          }}
        >
          {formatedCountdown.minutes < 10
            ? `0${formatedCountdown.minutes}`
            : formatedCountdown.minutes}
          :
          {formatedCountdown.seconds < 10
            ? `0${formatedCountdown.seconds}`
            : formatedCountdown.seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
