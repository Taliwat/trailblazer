import { useState } from "react";
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

export default function Activities({ activities }) {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
      <div id="Activities" className="p-2 shadow-lg grow-0 w-full">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="font-extrabold text-black-600 text-2xl">Activities:</p>
          </AccordionHeader>
          <AccordionBody>
            <ul>
              {activities.map((activity) => (
                <li className="inline" key={activity.id}>{activity.name}&nbsp;&nbsp;&nbsp;</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
  )
}
