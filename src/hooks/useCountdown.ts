import { useEffect, useState, useRef, useCallback } from "react";

export const useCountdown = (initialValue: number, interval = 1000) => {
  const intervalRef = useRef<number | null>(null); // Use `number` for browser environments
  const [countdown, setCountdown] = useState(initialValue);

  const startCountdown = useCallback(() => {
    if (intervalRef.current !== null) return; // Check if the interval is already running
    intervalRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1; // Decrement by 1 (not by `interval`)
        }
        if (prev === 0 && intervalRef.current !== null) {
          clearInterval(intervalRef.current); // Clear the interval when countdown reaches 0
          intervalRef.current = null;
        }
        return prev;
      });
    }, interval);
  }, [interval]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current); // Clear the interval if it's running
      intervalRef.current = null;
    }
    setCountdown(initialValue); // Reset the countdown to the initial value
  }, [initialValue]);

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { countdown, startCountdown, resetCountdown };
};
