import { letter } from '../../data/LetterData.tsx'
import './styles.css'

export default function Letter(){
    return (
        <article>
        <h2>Dear {letter.recipient},</h2>
        <p id="ind">{letter.body}</p>
        <p>Love, {letter.signature}</p>
        </article>
    );
}
