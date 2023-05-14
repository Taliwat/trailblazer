import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER_REVIEWS } from "../utils/queries";
import Review from "../components/Reviews/Review";
import { useEffect, useState } from "react";







export default function UserProfile() {
 

  const { data: userData } = useQuery(QUERY_ME);
  let user;
  if (userData) {
    user = userData.me;
  }
  
  const { data } = useQuery(QUERY_USER_REVIEWS);
  let reviews;
  if (data) {
    reviews = data.userReviews;
    
  }
  console.log(reviews);
  

  return(
      <section className="bg-white">
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <h1 className="text-gray-600 font-bold text-2xl mb-2">{user.username}'s Profile</h1>
            </div>
            <div className="mb-4">
              <h2 className="text-gray-600 font-bold text-lg mb-2">Email: {user.email}</h2>
              <h2 className="text-gray-600 font-bold text-lg mb-2">State: {user.state}</h2>
              <h2 className="text-gray-600 font-bold text-lg mb-2">Username: {user.username}</h2>
              <h2 className="text-gray-600 font-bold text-lg mb-2">Parks Visited: {user.parksVisited}</h2>
              <h2 className="text-gray-600 font-bold text-lg mb-2">Park Wish List: {user.wishList}</h2>
              <h2 className="text-gray-600 font-bold text-lg mb-2">My reviews:</h2>
                <ul className="text-gray-600 font-bold text-lg mb-2">
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