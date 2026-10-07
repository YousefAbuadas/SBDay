import { useEffect, useState } from "react";

const CLICKS_TO_OPEN = 10;
const SHAKE_DURATION = 620;
const PRESENT_DISPLAY_DURATION = 5000;

export default function usePresentSequence(presentCount: number) {
  const [clickCount, setClickCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (clickCount !== CLICKS_TO_OPEN) return;

    const timeout = window.setTimeout(() => setIsOpen(true), SHAKE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [clickCount]);

  useEffect(() => {
    if (!isOpen || currentIndex >= presentCount - 1) return;

    const timeout = window.setTimeout(() => {
      setCurrentIndex((index) => index + 1);
      setClickCount(0);
      setIsOpen(false);
    }, PRESENT_DISPLAY_DURATION);

    return () => window.clearTimeout(timeout);
  }, [isOpen, currentIndex, presentCount]);

  const shake = () => {
    setClickCount((count) => Math.min(count + 1, CLICKS_TO_OPEN));
  };

  return {
    currentIndex,
    isOpen,
    clickCount,
    clicksRemaining: Math.max(0, CLICKS_TO_OPEN - clickCount),
    shake,
  };
}
