import { Link } from "react-router-dom"



export default function Footer () {
    return (
        <footer className="w-full h-12 bg-stone-200 flex justify-between shadow-lg border-solid border-orange-400 border-2 rounded-lg">
            <div className= "w-1/12 h-full flex justify-center items-center font-mono font-semibold"> 
                <Link to={"/About Us"} >About Us</Link>
            </div>
            <div className=" w-1/12 h-full flex justify-center items-center font-mono font-semibold">
                <Link to={"/Contact Us"} >Contact Us</Link>
            </div>
            
            


        </footer>
    )
}