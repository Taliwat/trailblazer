export default function Activities ({ activities }) {

  // console.log(activities);

  return(
    <>
      <br/>
      <div className="shadow-lg w-full">
        <p className="text-xl font-extrabold">Activities:</p>
        <ul>
        {activities.map((activity) => (
          <li className="inline" key={activity.id}>{activity.name}&nbsp;&nbsp;&nbsp;</li>
        ))}
        </ul>
      </div>
    </>
  )
}
