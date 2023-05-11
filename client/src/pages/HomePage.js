import MapBox from "../components/MapBox/MapBox"
import { useEffect, useState } from "react"
import { coords } from '../assets/coords.js'
import { Link } from "react-router-dom"

// state will likely be upshifted and passed down as a prop and setState/state passed to Navbar
export function HomePage({ state }) {
    // Probably up-shift this to root app for use in NavBar and Homepage
    const [npsData, setNpsData] = useState([])
    const ROOTNPSURI = 'https://developer.nps.gov/api/v1/parks?stateCode='
    const NPSURI = `${ROOTNPSURI}${state}&limit=20&api_key=${process.env.REACT_APP_NPS_API}`

    let LOCATIONLON = coords[state].lon
    let LOCATIONLAT = coords[state].lat

    useEffect(() => {
        async function fetchMapData() {
            const mapData = await fetch(NPSURI);
            const data = await mapData.json();
            setNpsData(data)
        }
        fetchMapData()
    }, [state, NPSURI])

    return (
        <>
            {<MapBox lonx={LOCATIONLON} latx={LOCATIONLAT} npsData={npsData} />}
            <div className="flex flex-col gap-3">
                {npsData.data && npsData.data.map(park => {
                    return (
                        <div className="flex md:flex-row flex-col-reverse justify-between md:h-96 shadow-lg md:text-base text-xs " key={park.parkCode}>
                            <div className="flex flex-col p-2 md:w-2/5 gap-2 overflow-y-auto break-words">
                                <Link to={`/park/${park.parkCode}`}><p><b>{park.fullName}</b></p> </Link>
                                <p>{park.description}</p>
                                <p>Entrance Fees: {park?.entranceFees[0]?.cost} {park?.entranceFees[0]?.description || "0.00 Free"}</p>
                                <p>Park Score: 5/5</p>
                                <p>Leave a review</p>
                                {/* ratings */}
                            </div>
                            <div className="flex md:w-3/5 md:h-auto h-60 p-2">
                                <img src={park.images[0]?.url} className="h-full w-full object-cover" alt={'park'} />
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}