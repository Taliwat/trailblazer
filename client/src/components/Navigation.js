import { Link } from "react-router-dom"



export default function NavBar () {
    return (
        <nav className="w-full h-20 bg-stone-200 flex justify-between shadow-lg">
            <div className= "w-1/12 h-full flex justify-center items-center"> 
                <Link to={"/"} className="bg-orange-300 h-5/6 w-1/2"></Link>
            </div>
            <div className=" w-1/12 h-full flex justify-center items-center">
                <input type="text" className="bg-stone-50 w-full h-1/12"/>
            </div>
            <div className=" w-1/12 h-full flex justify-center items-center">
                <Link to={"/login"} >Login</Link>
            </div>
            
            


        </nav>
    )
}