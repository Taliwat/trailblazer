
//loops over review array for the park and spew them onto the screen
//just a dumb component for organization purposes
export default function Review({ review }) {
    const fakeReview = { author: 'fakeauthor1', body: 'This is a fake review Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum ', rating: '5/5' }

    return (
        <div className="flex flex-col shadow-lg mt-8">
            <div className="flex gap-5">
                <p className="font-extrabold">{fakeReview.author}</p>
                <h1 className="text-gray-700 font-extrabold">{fakeReview.rating}</h1>
            </div>
            <p className="text-xl">{fakeReview.body}</p>
        </div>
    )

}