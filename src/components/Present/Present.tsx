import Challenge from "../Challenge/Challenge.tsx";
import Letter from "../Letter/Letter.tsx";
import Media from "../Media/Media.tsx";
import PresentButton from "./PresentButton.tsx";
import usePresentSequence from "./usePresentSequence.ts";
import "./styles.css";

const presents = [
  { id: "letter", title: "Click to get your present!", Content: Letter },
  { id: "media", title: "Here is another!", Content: Media },
  { id: "challenge", title: "One more: but you have to win to get the final prize!", Content: Challenge },
] as const;

export default function Present() {
  const { currentIndex, isOpen, clickCount, clicksRemaining, shake } =
    usePresentSequence(presents.length);
  const visiblePresents = presents.slice(0, currentIndex + 1);

  return (
    <section className="present-section">
      <div className="present-contents">
        {visiblePresents.map((present, index) => {
          const isCurrentPresent = index === currentIndex;
          const PresentContent = present.Content;

          return (
            <div key={present.id}>
              <h2>{present.title}</h2>
              {isCurrentPresent && !isOpen ? (
                <PresentButton
                  name={present.id}
                  clickCount={clickCount}
                  clicksRemaining={clicksRemaining}
                  onShake={shake}
                />
              ) : (
                <PresentContent />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
