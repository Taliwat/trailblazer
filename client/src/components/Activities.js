export default function Activities({ activities }) {

  // console.log(activities);

  return (
    <>
      <div id="Activities" className="p-2 shadow-lg w-screen">
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
