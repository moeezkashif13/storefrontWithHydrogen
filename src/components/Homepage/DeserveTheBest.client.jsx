import { Link } from "@shopify/hydrogen";

export default function DeserveTheBest(){
    return (
        <div >

<div className="flex  SMMax:flex-col ">

<div className=" w-1/2 SMMax:w-full h-[500px] SMMax:h-[300px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

<div className="w-1/2 SMMax:w-full pl-4 pr-4 SMMax:py-4 text-center flex flex-col gap-y-4 justify-center font-semibold">

<h1 >YOU DESERVE THE BEST</h1>

<p className="text-sm SMMax:text-lg ">We are devoted to unlocking potential through conditioning and the things we do today to prepare for tomorrow. When it comes to performing at your max, there should be no obstacles. So everything about our accessories we design for you has your progress and the best results in mind. Stop searching and start living your best life, with gear from our unlimited selection.</p>


<Link to="/collections/all" className="uppercase text-center  py-3 bg-red-500 text-white font-bold">
Yes I want to buy now
</Link>


</div>



</div>

<div className="flex  SMMax:flex-col  flex-row-reverse">

<div className=" w-1/2 SMMax:w-full h-[500px] SMMax:h-[300px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(https://images.pexels.com/photos/3737611/pexels-photo-3737611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}></div>

<div className="w-1/2 SMMax:w-full pl-4 pr-4 SMMax:py-4 text-center flex flex-col gap-y-4 justify-center font-semibold">

<h1 >SHOP WITH CONFIDENCE</h1>

<p className="text-sm SMMax:text-lg ">We strive to deliver an elevated customer experience. We aim to enhance the quality of your life by providing you high quality items at every day hot deals price. Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy.</p>


<Link to="/collections/all" className="uppercase text-center  py-3 bg-red-500 text-white font-bold">
Discover now
</Link>


</div>



</div>




        </div>
    )
}