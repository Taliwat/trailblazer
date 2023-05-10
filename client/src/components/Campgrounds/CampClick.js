export default function Campclick({ camp }){

  function handleClick(camp){
    alert(
      `${camp.name}\n
      Description:\n
      ${camp.description}\n
      Directions:\n
      ${camp.directionsOverview}\n
      Reservations: ${camp.reservationInfo}\n
      Reservation URL: ${camp.reservationUrl}\n
      Trash/Recycling: ${camp.amenities.trashRecyclingCollection}\n
      Toilets: ${camp.amenities.toilets[0]}\n
      Showers: ${camp.amenities.showers[0]}\n
      Cell Phone Reception: ${camp.amenities.cellPhoneReception}\n
      Laundry: ${camp.amenities.laundry}\n
      Ampitheater: ${camp.amenities.amphitheater}\n
      Dump Station: ${camp.amenities.dumpStation}\n
      Camp Store: ${camp.amenities.campStore}\n
      Electric Hookups: ${camp.campsites.electricalHookups}\n
      Regulations:\n
      ${camp.regulationsOverview}\n
      `
    );
  };

  function handleButtonClick(){
    handleClick(camp);
  }

  return(
    <li>
      <button key={camp.id} onClick={handleButtonClick}><h1 className="text-xl">{camp.name}</h1></button>
    </li>
  )
}
