
//loops over review array for the park and spew them onto the screen
//just a dumb component for organization purposes
export default function Review({ review }) {

    if (!review) return <h1>No reviews yet!</h1>

    function convertDate(date) {
        return new Date(parseInt(date)).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    const currentDate = convertDate(review.createdAt)

    return (
        <div className="flex flex-col shadow-lg">
            <div className="flex gap-5">
                <p className="font-extrabold">{review.authorName}</p>
                <p className="text-gray-700">{review.parkCode}</p>
                <h1 className="text-gray-700 font-extrabold">{review.score}/5</h1>
                <p className="text-gray-700">{currentDate}</p>
            </div>
            <p className="text-xl">{review.body}</p>
        </div>
    )

}