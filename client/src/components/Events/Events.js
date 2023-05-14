import { useEffect, useState } from "react";
import Eventdetails from "./Eventdetails";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Events({ parkCode }) {
  const [eventData, setEventData] = useState([]);
  const [open, setOpen] = useState(0);
 
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
          <div id="Event_List" className="p-2 grow-0 w-full md:w-7/12">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                  <p className="font-extrabold text-black-600 text-2xl">Park events:🗓</p>
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