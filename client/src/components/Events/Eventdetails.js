export default function Eventdetails({ event }){

  const description = event.description.replace(/<[^>]+>/g, '');

  function handleClick(event, description){
    alert(
      `${event.title}\n
      Description:\n
      ${description}\n
      Location:\n
      ${event.location}\n
      Date: ${event.datestart}\n
      Time: ${event.times[0].timestart} - ${event.times[0].timeend}\n
      Is it free: ${event.isfree}\n
      Contact: ${event.contactname}\n
      Contact Telephone: ${event.contacttelephonenumber}\n
      Contact Email: ${event.contactemailaddress}
      `
    );
  };

  function handleButtonClick(){
    handleClick(event, description);
  }

  return(
    <li className="truncate">
      <button key={event.id} onClick={handleButtonClick}>{event.title}</button>
    </li>
  )
}