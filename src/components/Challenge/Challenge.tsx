import { link } from "../../data/MediaData.tsx";
import bow from "../../assets/bow.svg";
import "./styles.css";

export default function Challenge() {
  return (
    <section className="challenge-card" aria-labelledby="challenge-description">
      <img className="challenge-card__bow" src={bow} alt="" draggable="false" />
      <h2 id="challenge-description" className="challenge-card__description">
        {link.description}
      </h2>
      <a className="challenge-card__button" href={link.media}>
        click here
      </a>
    </section>
  );
}
