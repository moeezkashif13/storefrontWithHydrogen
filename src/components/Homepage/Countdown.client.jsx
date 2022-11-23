import { useEffect } from "react";

import { Link } from "@shopify/hydrogen";

export default function SalesCountdown(){


  


useEffect(()=>{








// // Set the date we're counting down to
var countDownDate = new Date("Nov 25, 2022 15:57:25").getTime(); 


const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 3)

var countDownDate = tomorrow.getTime()-166933850;


// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = `<div class=" flex flex-col items-center"> <p>${days}</p> <p>${days>1?'Days':'Day'}</p> </div>` + `<div>:</div>` + `<div class=" flex flex-col items-center"> <p>${hours}</p> <p>${hours>1?'Hours':'Hour'}</p> </div>`
    + `<div>:</div>` +   `<div class=" flex flex-col items-center"> <p>${minutes}</p> <p>${minutes>1?'Minutes':'Minute'}</p> </div>` + `<div>:</div>` + `<div class=" flex flex-col items-center"> <p>${seconds}</p> <p>Seconds</p> </div>`;
    
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


  return ()=> clearInterval(x);


},[])


    return(

        <div className="flex flex-col items-center gap-y-2 ">


<h1 className="font-semibold">SUPER SALE COUNTDOWN</h1>

<p className="text-lg">The Biggest Sale in our History is just around the corner. Set your alarm clocks so you don’t miss out.</p>


<div id="demo" className=" text-[2rem] SMMax:text-[1.1rem] font-semibold flex  gap-16 SMMax:gap-5 mt-7 mb-5"></div>




<Link to="/collections/all" className=" w-1/2  mx-auto text-center  pt-3 pb-2 uppercase text-white bg-red-500 text-xl ">yes, i want to get this offer now!</Link>



        </div>
    )

}