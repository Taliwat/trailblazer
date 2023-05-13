import { Link } from "react-router-dom"


//creates a new footer that has links to go to the About Us and Contact Us pages
export default function Footer() {
    return (
        <footer className="w-full h-12 bg-gray-300 flex justify-between shadow-lg border-solid border-2 rounded-lg inset-x-0 bottom-0">
            <div className="h-full flex justify-center items-center font-mono font-semibold hover:text-gray-600">
                <Link to={"/about"} >About Us</Link>
            </div>
            <div className="h-full flex justify-center items-center font-mono font-semibold hover:text-gray-600">
                <Link to={"/contact"} >Contact Us</Link>
            </div>
        </footer>
    )
}