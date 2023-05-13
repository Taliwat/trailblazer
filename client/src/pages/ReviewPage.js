import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";
import { Rating } from "@material-tailwind/react";

export default function ReviewPage() {
  const [formState, setFormState] = useState({ score: 0, body: '' });
  const { parkCode } = useParams();
  const [addReview] = useMutation(ADD_REVIEW);

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const imgurl = searchParams.get("imgurl")
  const parkName = searchParams.get("parkname")

  const navigate = useNavigate()

  const { data } = useQuery(QUERY_ME);
  let user;
  if (data) {
    user = data.me;
  }

  const handleChange = (event) => {
    const name = event?.target?.name || "score"
    const value = event?.target?.value || event

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addReview({
      variables: {
        score: formState.score,
        body: formState.body,
        parkCode: parkCode,
        _id: user._id,
        authorName: user.username
      },
    });
    navigate(`/park/${parkCode}`)
  }

  return (
    <div className='w-full flex items-center justify-center font-bold bg-white' style={{ height: '90vh' }}>
      <section className='w-full h-full flex items-center justify-center font-bold' style={{ backgroundImage: `url(${imgurl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col justify-center items-center md:w-1/2 w-full rounded-md p-2" style={{ backgroundColor: '#aaaaaadb' }}>
          <form className='flex flex-col justify-center items-center gap-5' onSubmit={handleFormSubmit} >
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="score">Score:</label>
              <Rating name="score" onChange={handleChange} unratedColor="yellow" ratedColor="yellow" className="h-10 content" required />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label htmlFor="body">Review: </label>
              <textarea name="body" onChange={handleChange} className="w-96 h-40 p-2" required />
            </div>
            <button type="submit" className='font-extrabold text-2xl p-2 hover:text-stone-800'>Submit</button>
          </form>
        </div>
      </section>
      <h1 className="absolute bottom-5 left-5 text-5xl hover:text-gray-800">{parkName}</h1>
    </div>
  )
}