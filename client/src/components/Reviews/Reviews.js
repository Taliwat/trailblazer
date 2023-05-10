import { Link } from "react-router-dom";
import Review from "./Review";
import Auth from "../../utils/auth"

export default function Reviews({ park, reviewData }) {
    //eventually fetch reviews with GQL

    return (
        <section className="text-xl">
            {Auth.loggedIn() && <Link to={`/review/${park.parkCode}?imgurl=${park.images[2]?.url || park.imgages[0]?.url}&parkname=${park.fullName}`} className="text-gray-900 italic hover:text-gray-700">Leave a review</Link>}
            {reviewData.reviews.length > 0 ? (
                <>
                    {
                        reviewData.reviews.map(review => {
                            return (
                                <Review review={review} key={review._id} />
                            )
                        })
                    }
                </>
            ) : <h1>There are no reviews for this park yet!</h1>}
        </section>
    )
}
