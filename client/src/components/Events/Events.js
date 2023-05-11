import { useEffect, useState } from "react";
import Eventdetails from "./Eventdetails";

export default function Events({ parkCode }) {
  const [eventData, setEventData] = useState([]);

  const ROOTNPSURI = 'https://developer.nps.gov/api/v1/events?parkCode='
  const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}`

  useEffect(() => {
    async function fetchEventData() {
      const response = await fetch(NPSURI);
      const data = await response.json();
      setEventData(data.data)
    }
    fetchEventData()
  }, [NPSURI])

  return (

    <>
      {
        eventData.length ?
          <div className="shadow-lg w-full">
            <div className="flex w-full">
              <p className="font-extrabold text-black-600 text-2xl">Park events:</p>
            </div>
            <ul className="list-disc shadow-lg">
              {eventData.map((event) => (
                <Eventdetails event={event} key={event.id} />
              ))}
            </ul>
          </div>
          : null
      }
    </>

  )
}