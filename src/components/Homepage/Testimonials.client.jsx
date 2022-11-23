import { Splide,SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useEffect } from "react";

export default function Testimonials({TestimonialsRelated}){

console.log(TestimonialsRelated);

return(

    <div className="py-6">


<h1 className="text-center font-semibold text-4xl mb-10">Here's what our customers think</h1>

<div className="px-20">

<Splide options={{perPage:3,pagination:false,gap:'3rem',arrows:false,type:'loop',

autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:4000,



}} >

{TestimonialsRelated.record.allTestimonials.map(eachElem=>{
    
    console.log(eachElem);

    
    
    
    return <SplideSlide>
        
        <div className=" flex flex-col items-center gap-y-2">

<div className="w-20 h-20  rounded-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${eachElem.avatar})`}}></div>

<p className="text-lg font-medium text-center">{eachElem.message}</p>

<cite className="font-medium">- {eachElem.name}</cite>



        </div>

        
        </SplideSlide>
})}



</Splide>


</div>



    </div>

)

}