import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Review from "../components/Review";
import Alerts from "../components/Alerts";
import Activities from "../components/Activities";

export default function ParkPage() {
    const { parkCode } = useParams() // eventually grab parkCode from params

    const [parkData, setParkData] = useState(null) //maybe just import this with GQL maybe... Idk yet
    //eventually import reviews with a GQL query
    const reviews = [{ review: 1, id: 1 }, { review: 1, id: 2 }, { review: 1, id: 3 }, { review: 1, id: 4 }, { review: 1, id: 5 }]

    //fetch that park based on parkCode from DB or from NPS
    const ROOTNPSURI = 'https://developer.nps.gov/api/v1/parks?parkCode='
    const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}` //replace tempParkCode w/ parkCode

    useEffect(() => {
        async function fetchParkData() {
            const mapData = await fetch(NPSURI);
            const data = await mapData.json();
            setParkData(data)
        }
        fetchParkData()
    }, [NPSURI])

    //FETCH REVIEWS FROM DB AND ADD GUARD CLAUSE FOR LOADING REVIEWS

    console.log(parkData?.data[0])

    if (!parkData?.data) return <h1>Loading...</h1>
    const park = parkData.data[0]

    return (
        <>
            {parkData &&
                <main className="p-2 w-full h-full">
                    <div className="flex w-full" style={{ height: `65vh` }}>
                        <img src={park.images[1].url} className="h-full w-full object-cover object-bottom" alt={park.fullName} />
                    </div>
                    <div className="flex w-full gap-10">
                        <h1 className="font-extrabold text-4xl">{park.fullName}</h1>
                        {/* placeholder review aggregate */}
                        <h4 className="font-extrabold text-4xl text-gray-700">5/5</h4>
                    </div>
                    <div className="w-full">
                        <p className="text-2xl">{park.description} <a className="text-blue-400" target="_blank" rel='noreferrer' href={park.url}>{park.url}</a></p>
                    </div>
                    <Alerts parkCode={parkCode}/>
                    <Activities activities={park.activities}/>
                    {/* Loop over reviews and spew them onto the page with review components passing in the current review as a prop */}
                    {reviews.map(review => {
                        return (
                            <Review review={review} key={review.id} />
                        )
                    })}
                </main>}


        </>
    )

}