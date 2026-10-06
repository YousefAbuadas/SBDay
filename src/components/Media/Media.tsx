import { vid } from "../../data/MediaData";
import "./styles.css";
import './styles.css'

export default function Media() {
    return(
        <section>
            <h2>Click the present for a surprise!</h2>
            <iframe
                id="media-video"
                src={vid.media}
                title={vid.description}
                allowFullScreen
            />
        </section>
    );
};
