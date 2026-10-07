import presentArt from "./present.svg";

type PresentButtonProps = {
  name: string;
  clickCount: number;
  clicksRemaining: number;
  onShake: () => void;
};

export default function PresentButton({
  name,
  clickCount,
  clicksRemaining,
  onShake,
}: PresentButtonProps) {
  return (
    <button
      className="present-button"
      type="button"
      aria-label={`Shake the ${name} present. ${clicksRemaining} clicks until it opens.`}
      onClick={onShake}
    >
      <img
        key={clickCount}
        className={clickCount > 0 ? "present-image present-image--shaking" : "present-image"}
        src={presentArt}
        alt=""
        draggable="false"
      />
    </button>
  );
}
