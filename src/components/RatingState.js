import './InteractiveRating.css';

function RatingState() {
    return (
        <div className="rating-state">
            <h2>How did we do?</h2>

            <p className="gray-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <p className="gray-text">1 2 3 4 5</p>

            <button>Submit</button>
        </div>
    );
}

export default RatingState;