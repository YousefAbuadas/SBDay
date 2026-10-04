import { vid } from "../../data/MediaData";
import "./styles.css";
import './styles.css'

export default function Media() {
    return(
        <section>
            <h2>{vid.description}</h2>
            <video id="media-video" controls>
                <source src={vid.media} type="video/mp4"/>
            </video>
        </section>
    );
}
