import { useEffect, useState } from "react";
import Eventdetails from "./Eventdetails";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Events({ parkCode }) {
  const [eventData, setEventData] = useState([]);
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
          <div className="p-2 grow-0 w-screen md:w-2/3">
            <Accordion open={open === 0}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                  <p className="font-extrabold text-black-600 text-2xl">Park events:</p>
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {eventData.map((event) => (<Eventdetails event={event} key={event.id} />))}
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
          : null
      }
    </>

  )
}