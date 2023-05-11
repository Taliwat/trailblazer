import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";
import { useParams } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";




export default function ReviewPage() {
    const [formState, setFormState] = useState({});
    const { parkCode } = useParams();
    const [addReview] = useMutation(ADD_REVIEW);
    const { data } = useQuery(QUERY_ME);

    let user;

    if (data) {
        user = data.user;
    }
    console.log(user);
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        const mutationResponse = await addReview({
          variables: {
            score: formState.score,
            body: formState.body,
            parkCode: parkCode,
            password: formState.password,
            username: formState.username,
            state: formState.state
          },
        });
    }



    return(
        <form className="flex h-screen w-screen">
            <label htmlFor="score">Score:</label>
            <input type="text" name="score" onChange={handleChange} />
            <label htmlFor="body" />
            <textarea name="body" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}