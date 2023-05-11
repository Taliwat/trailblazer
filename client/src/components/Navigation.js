import { Link, useLocation } from "react-router-dom"
import StateFilter from "./StateFilter"
import logo from "../assets/imgs/logo.png"

export default function NavBar({ state, newState }) {
    const location = useLocation()

    return (
        <nav className="w-full flex justify-between shadow-lg" style={{ height: '10vh', backgroundColor: '#a2a2a275' }}>
            <div className="md:w-48 w-40 h-full flex justify-center items-center">
                <Link to={"/"} className="h-5/6 w-1/2" style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></Link>
            </div>
            <div className=" md:w-48 w-40 h-full flex justify-center items-center">
                {location.pathname === '/' && (
                    <StateFilter state={state} newState={newState} />
                )}
            </div>
            <div className=" md:w-48 w-40 h-full flex justify-center items-center">
                <Link to={"/login"} className="font">Login</Link>
            </div>
        </nav>
    )
}