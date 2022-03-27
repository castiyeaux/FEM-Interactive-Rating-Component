import './InteractiveRating.css';
import { ReactComponent as ThankYouIcon } from '../images/illustration-thank-you.svg';

function ThankYouState() {
    return (
        <div className="thank-you-state">
            <ThankYouIcon></ThankYouIcon>
            <p className="gray-text">You selected <strong>Add rating here</strong> out of 5</p>

            <p className="gray-text">Thank you!</p>

            <p className="gray-text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    );
}

export default ThankYouState;