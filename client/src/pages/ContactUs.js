
//create a Contact page that gives information about the team and how to contact us!  be a bit creative here, and be able to have users have a button that can send emails given the provided email in the team member's profile.
export default function ContactUs () {
    return (
<div className="contact us section">

    <h2 className="text-align-center ">Meet the Team!</h2>
    <div className="row-span-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="./John's picture.jpg" alt="John Scicluna self"/>
  <div class="px-6 py-4">
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
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="./Jacob's picture.jpg" alt="Jacob Jeffries self"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Jacob Jeffries</div>
    <p class="text-gray-700 text-base">
    Insert short script for Jacob here.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <a href="your_link" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jacob's Github</a>
  <a href="mailto:" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact Jacob!</a>
  </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/Damian's picture.jpg" alt="Damian Galus self"/>
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
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="client\public\images\RDM wedding edit.jpg" alt="Ryan Mennemeier self"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Ryan Mennemeier</div>
    <p class="text-gray-700 text-base">
    Insert short script for Ryan here.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <a href="https://github.com/Taliwat" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ryan's Github</a>
  <a href="mailto:kalpha1865@gmail.com" className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Contact Ryan!</a>
  </div>
</div>
    </div>
</div>
)
};
