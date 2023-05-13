import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Alerts from "../components/Alerts";
import Reviews from "../components/Reviews/Reviews";
import Activities from "../components/Activities";
import Campgrounds from "../components/Campgrounds/Campgrounds";
import Events from "../components/Events/Events"
import Weather from "../components/Weather/Weather"
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../utils/queries";

export default function ParkPage() {
    const { parkCode } = useParams() // eventually grab parkCode from params

    const [parkData, setParkData] = useState(null) //maybe just import this with GQL maybe... Idk yet
    //eventually import reviews with a GQL query
    const { loading, error, data: reviewData } = useQuery(QUERY_REVIEWS, {
        variables: {
            parkCode: parkCode
        }
    })

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

    if (!parkData?.data) return <h1>Loading...</h1>
    const park = parkData.data[0]



    return (
        <>
            {parkData &&
                <main className="w-full h-full">
                    <div className="flex w-full" style={{ height: `65vh` }}>
                        <img src={park.images[1].url} className="h-full w-full object-cover object-bottom" alt={park.fullName} style={{ backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                    </div>
                    <div className="m-2 flex flex-col gap-5">
                        <div className="flex w-full gap-10">
                            <h1 className="font-extrabold text-4xl">{park.fullName}</h1>
                            {reviewData.reviews.length > 0 ? <h4 className="font-extrabold text-4xl text-gray-700">{(reviewData.reviews.map(review => review.score).reduce((sum, value) => { return sum + value }) / reviewData.reviews.length).toFixed(2)}/5</h4> : null}
                        </div>
                        <div className="w-full">
                            <p className="text-2xl">{park.description} <a className="text-blue-400" target="_blank" rel='noreferrer' href={park.url}>{park.url}</a></p>
                        </div>
                        <Alerts parkCode={parkCode} />
                        <Activities activities={park.activities} />
                        <Weather park={park} />
                        <div id="Container_C_E"className="flex flex-row flex-wrap shadow-lg">
                            <Campgrounds parkCode={parkCode} />
                            <Events parkCode={parkCode} />
                        </div>
                        {loading ? <h1>Loading...</h1> : <Reviews park={park} reviewData={reviewData} />}
                    </div>
                </main>}


        </>
    )

}