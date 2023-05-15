import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER_REVIEWS } from "../utils/queries";
import Review from "../components/Reviews/Review";
import leaves from "../assets/imgs/leaves.webp"

export default function UserProfile() {

  const { data: userData } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });
  let user;
  if (userData) {
    user = userData.me;
  }

  const { data } = useQuery(QUERY_USER_REVIEWS, { fetchPolicy: 'network-only' });
  let reviews;
  if (data) {
    reviews = data.userReviews;
  }

  if (!user) return <h1>No User Found!</h1>

  return (
    <section style={{ minHeight: '90vh', backgroundImage: `url(${leaves})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col bg-opacity-80">
          <div className="mb-4">
            <h1 className="text-gray-800 text-2xl mb-2 font-extrabold shadow-md">{user.username}'s Profile</h1>
          </div>
          <div className="mb-4">
            <h2 className="text-gray-800 font-bold text-lg mb-2">Email: {user.email}</h2>
            <h2 className="text-gray-800 font-bold text-lg mb-2">State: {user.state}</h2>
            <h2 className="text-gray-800 font-bold text-lg mb-2">Username: {user.username}</h2>
            <h2 className="text-gray-800 font-bold text-lg mb-2 flex gap-1">
              Parks Visited: <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 overflow-hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </span> {user.parksVisited.length}</h2>
            <h2 className="text-gray-800 font-bold text-lg mb-2 flex gap-1">
              Park Wish List: <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 overflow-hidden" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </span> {user.wishList.join(", ")}</h2>
            <h2 className="text-gray-800 font-bold text-lg">My reviews:</h2>
            <ul className="text-gray-800 font-bold text-lg mb-2 h-96 overflow-y-auto">
              {reviews && reviews.map(reviews => (
                <li className="m-2">
                  <Review review={reviews} key={reviews._id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};