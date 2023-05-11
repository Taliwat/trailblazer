import { useEffect, useState } from "react";

export default function Alert ({ parkCode }) {
  const [alertData, setAlertData] = useState([]);

  const ROOTNPSURI = 'https://developer.nps.gov/api/v1/alerts?parkCode='
  const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}` 

  useEffect(() =>{
    async function fetchAlertData() {
      const response = await fetch(NPSURI);
      const data = await response.json();
      setAlertData(data.data)
    }
    fetchAlertData()
  }, [NPSURI])

  return (
    <div>
      <br/>
      {alertData.length ? 
        <>
        <div className="flex w-full">
          <p className="font-extrabold text-red-600 text-2xl">Park Alerts:</p>
        </div>
        <ul className="list-disc shadow-lg">
        {alertData.map((alert) => (
            <li key={alert.id}><h1 className="text-xl">{alert.description}</h1></li>))}
        </ul>
        </>
      :null}
    </div>
  )
}
