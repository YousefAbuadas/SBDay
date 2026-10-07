import { vid } from "../../data/MediaData";
import "./styles.css";
import './styles.css'

export default function Media() {
    return(
        <section>
            <iframe
                id="media-video"
                src={vid.media}
                title={vid.description}
                allowFullScreen
            />
        </section>
    );
};
