import { letter } from '../../data/LetterData.tsx'
import './styles.css'

export default function Letter(){
    return (
        <article className="letter-paper" aria-label={`Letter to ${letter.recipient}`}>
        <span className="letter-paper__hole letter-paper__hole--top" aria-hidden="true" />
        <span className="letter-paper__hole letter-paper__hole--middle" aria-hidden="true" />
        <span className="letter-paper__hole letter-paper__hole--bottom" aria-hidden="true" />
        <div className="letter-paper__content">
            <h2>Dear {letter.recipient},</h2>
            <p className="letter-paper__body">{letter.body}</p>
            <p className="letter-paper__closing">Love,<br />{letter.signature}</p>
        </div>
        </article>
    );
}
