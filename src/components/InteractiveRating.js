import './InteractiveRating.css';
import RatingState from './RatingState';
import ThankYouState from './ThankYouState';

function InteractiveRating() {
    return (
        <div className="interactive-rating">
            <div>Date</div>
            <div className="interactive-rating__description">
                <h2>Title</h2>
                <div className="interactive-rating__price">Amount</div>
            </div>
            <RatingState></RatingState>
            <ThankYouState></ThankYouState>
        </div>
    );
}

export default InteractiveRating;