import { Link } from "react-router-dom";
import Review from "./Review";

export default function Reviews({ parkCode }) {
    //eventually fetch reviews with GQL
    const reviews = [{ review: 1, id: 1 }, { review: 1, id: 2 }, { review: 1, id: 3 }, { review: 1, id: 4 }, { review: 1, id: 5 }]

    return (
        <section>
            <Link to={`/review/:${parkCode}`}>Leave a review!</Link>
            {
                reviews.map(review => {
                    return (
                        <Review review={review} key={review.id} />
                    )
                })
            }
        </section>
    )
}
