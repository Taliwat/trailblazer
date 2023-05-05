import MapBox from "../components/MapBox/MapBox"
import { useEffect, useState } from "react"

const LOCATIONLON = -83.045753
const LOCATIONLAT = 42.331429

export function HomePage() {
    const [state, setState] = useState('MI')
    const [npsData, setNpsData] = useState([])
    const ROOTNPSURI = 'https://developer.nps.gov/api/v1/parks?stateCode='
    const NPSURI = `${ROOTNPSURI}${state}&limit=10&api_key=${process.env.REACT_APP_NPS_API}`

    useEffect(() => {
        async function fetchMapData() {
            const mapData = await fetch(NPSURI);
            const data = await mapData.json();
            setNpsData(data)
        }
        fetchMapData()
    }, [state, NPSURI])


    console.log(npsData)
    return (
        <>
            {<MapBox lonx={LOCATIONLON} latx={LOCATIONLAT} npsData={npsData} />}
            <div className="flex flex-col gap-3">
                {npsData.data && npsData.data.map(park => {
                    return (
                        <div className="flex justify-between h-96 shadow-lg md:text-base text-xs" key={park.parkCode}>
                            <div className="flex flex-col p-2 w-2/5 gap-2 overflow-y-auto break-words">
                                <p><b>{park.fullName}</b></p>
                                <p>{park.description}</p>
                                <p>Entrance Fees: {park.entranceFees[0].cost} {park.entranceFees[0].description}</p>
                                <p>Park Score: 5/5</p>
                                <p>Leave a review</p>
                                {/* ratings */}
                            </div>
                            <div className="flex w-3/5 p-2">
                                <img src={park.images[0].url} className="h-full w-full" alt={'park'} />
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}