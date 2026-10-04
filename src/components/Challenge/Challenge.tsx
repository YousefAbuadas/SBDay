import { link } from "../../data/MediaData.tsx"
 
export default function Challenge() {
return (
    <section>
        <h2>{link.description}</h2>
        <a href={link.media}>click here</a>
    </section>
);
}