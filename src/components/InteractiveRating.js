import './InteractiveRating.css';
import RatingState from './RatingState';
import ThankYouState from './ThankYouState';

function InteractiveRating() {
    return (
        <div className="interactive-rating">
            <RatingState></RatingState>
            <ThankYouState></ThankYouState>
        </div>
    );
}

export default InteractiveRating;