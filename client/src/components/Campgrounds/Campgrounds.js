import { useEffect, useState } from "react";
import Campclick from "./CampClick";

export default function Campgrounds({ parkCode }) {
  const [campData, setCampData] = useState([]);

  const ROOTNPSURI = 'https://developer.nps.gov/api/v1/campgrounds?parkCode='
  const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}`

  useEffect(() => {
    async function fetchCampData() {
      const response = await fetch(NPSURI);
      const data = await response.json();
      setCampData(data.data)
    }
    fetchCampData()
  }, [NPSURI])

  return (
    <>
      {
        campData.length ?
          <div className="p-2 grow-0 w-screen md:w-1/3">
            <div>
              <p className="font-extrabold text-black-600 text-2xl">Camp Grounds:</p>
            </div>
            <ul>
              {campData.map((camp) => (<Campclick camp={camp} key={camp.id} />))}
            </ul>
          </div>
          : null
      }
    </>
  )

}