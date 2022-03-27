import './InteractiveRating.css';
import { ReactComponent as StarIcon } from '../images/icon-star.svg';

function RatingState() {
    return (
        <div className="rating-state">
            <StarIcon className="star-icon"></StarIcon>
            <div className="rating-question">
                <h2>How did we do?</h2>

                <p className="gray-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>

            <div className="rating-buttons">
                <p className="gray-text rating-button">1</p>
                <p className="gray-text rating-button">2</p>
                <p className="gray-text rating-button">3</p>
                <p className="gray-text rating-button">4</p>
                <p className="gray-text rating-button">5</p>
            </div>

            <button className="submit-button">Submit</button>
        </div>
    );
}

export default RatingState;