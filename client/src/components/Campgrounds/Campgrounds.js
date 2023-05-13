import { useEffect, useState } from "react";
import Campclick from "./CampClick";
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


export default function Campgrounds({ parkCode }) {
  const [campData, setCampData] = useState([]);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
          <div id="Campground_List" className="p-2 grow-0 w-screen md:w-5/12">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                <p className="font-extrabold text-black-600 text-2xl">Camp Grounds:⛺</p>
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {campData.map((camp) => (<Campclick camp={camp} key={camp.id} />))}
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
          : null
      }
    </>
  )

}