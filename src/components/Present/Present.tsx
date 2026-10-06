import { useEffect, useState } from "react";
import presentArt from "./present.svg";
import "./styles.css";
// add type checking here

const CLICKS_TO_OPEN = 10;
const SHAKE_DURATION = 620;

export default function Present() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (count !== CLICKS_TO_OPEN) return;

    const timeout = window.setTimeout(() => setIsOpen(true), SHAKE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [count]);

  return (
    <section className="present-section">
      {isOpen ? (
        <div className="present-surprise" role="status">PRESENT!!!</div>
      ) : (
        <button
          className="present-button"
          type="button"
          aria-label={`Shake the present. ${Math.max(0, CLICKS_TO_OPEN - count)} clicks until it opens.`}
          onClick={() => setCount((current) => Math.min(current + 1, CLICKS_TO_OPEN))}
        >
          <img
            key={count}
            className={count > 0 ? "present-image present-image--shaking" : "present-image"}
            src={presentArt}
            alt=""
            draggable="false"
          />
        </button>
      )}
      <span className="present-progress" aria-live="polite">
        {isOpen ? "The present is open!" : `${count} of ${CLICKS_TO_OPEN} shakes`}
      </span>
    </section>
  );
}
