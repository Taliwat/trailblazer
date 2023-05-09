import { Link } from "react-router-dom"


//creates a new footer that has links to go to the About Us and Contact Us pages
export default function Footer () {
    return (
        <footer className="w-full h-12 bg-stone-200 flex justify-between shadow-lg border-solid border-2 rounded-lg">
            <div className= "w-1/12 h-full flex justify-center items-center font-mono font-semibold"> 
                <Link to={"/About Us"} >About Us</Link>
            </div>
            <div className=" w-1/12 h-full flex justify-center items-center font-mono font-semibold">
                <Link to={"/Contact Us"} >Contact Us</Link>
            </div>
            
            


        </footer>
    )
}