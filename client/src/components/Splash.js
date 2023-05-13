import backsplash from "../assets/imgs/backsplash.webp"

export default function Splash() {
    return (
        <div className="absolute -z-10 top-0 w-full" style={{ height: '57vh', backgroundImage: `url(${backsplash})` }}>

        </div>
    )
}