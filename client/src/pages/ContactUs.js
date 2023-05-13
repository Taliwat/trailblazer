//add your pictures 
import ryanpic from "../assets/imgs/RDM wedding edit.jpg";
// import johnpic from "../assets/imgs/your_picfilehere.jpg";
// import jacobpic from "../assets/imgs/your_picfilehere.jpg";
// import damianpic from "../assets/imgs/your_picfilehere.jpg";

//create a Contact page that gives information about the team and how to contact us!  be a bit creative here, and be able to have users have a button that can send emails given the provided email in the team member's profile.

export default function ContactUs () {
    return (
  <>
<h2 className="text-align-center text-3xl font-bold text-gray-700 flex justify-center pt-4">Meet the Team!</h2>
<div className="bg-gray-100 flex flex-col gap-5 ">
<div></div>
  <div className="grid grid-cols-2 gap-8 px-4 py-8">
    <div class="max-w-sm rounded overflow-hidden shadow-lg pt-12">
      {/* <img class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 object-contain px-6 h-20" src={johnpic} alt="John Scicluna self"/> */}
      < div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">John Scicluna</div>
        <p class="text-gray-700 text-base">
        Insert short script for John here.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a href="your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">John's Github</a>
        <a href="mailto:your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact John!</a>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg pt-12">
      {/* <img class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 object-contain px-6 h-20" src={jacobpic} alt="Jacob Jeffries self"/> */}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Jacob Jeffries</div>
        <p class="text-gray-700 text-base">
        Insert short script for Jacob here.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a href="your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jacob's Github</a>
        <a href="mailto:your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact Jacob!</a>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg pt-8 mb-4">
      {/* <img class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 object-contain px-6 h-20" src={damianpic} alt="Damian Galus self"/> */}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Damian Galus</div>
        <p class="text-gray-700 text-base">
        Insert short script for Damian here.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a href="your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Damian's Github</a>
        <a href="mailto:your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact Damian!</a>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg pt-8 mb-4">
      <img class="w-full object-contain px-6 h-20" src={ryanpic} alt="Ryan Mennemeier self"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Ryan Mennemeier</div>
        <p class="text-gray-700 text-base">
        Hi! I'm Ryan, a full stack developer with a passion for learning and creating things. I'm currently looking for a position in the software industry. Feel free to reach out to me if you have any questions!
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a href="https://github.com/Taliwat" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ryan's Github</a>
        <a href="mailto:kalpha1865@gmail.com" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact Ryan!</a>
      </div>
    </div>
  </div>  
</div>
</>)
};
