
//loops over review array for the park and spew them onto the screen
//just a dumb component for organization purposes
export default function Review({ review }) {

    return (

        <div className="flex flex-col shadow-lg mt-8">
            <div className="flex gap-5">
                <p className="font-extrabold">{review.authorName}</p>
                <h1 className="text-gray-700 font-extrabold">{review.score}/5</h1>
            </div>
            <p className="text-xl">{review.body}</p>
        </div>
    )

}