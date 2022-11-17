import {Splide,SplideSlide, SplideTrack} from '@splidejs/react-splide'


export default function ExploreCategs(){
    return(
        <div className='px-10 '>


<div className='flex w-full flex-wrap  gap-x-4'>

<Splide options={{perPage:2,height:'250px',pagination:false,gap:'20px',arrows:false,autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:3000}}>

{[1,2,3,4,5].map((elem,index)=>{

    return  <SplideSlide> <div className={`h-full  ${index%2==0?'bg-[#eee7de]':'bg-[#eeece8]'} px-8 flex`}>

    <div className='w-[40%] h-full bg-cover  bg-norepeat ' style={{backgroundImage:`url(/suitmodel.png)`}}  ></div>


    <div className='w-[60%]  h-full pl-7 flex flex-col  justify-center'>

<h1 className='text-4xl font-semibold'>Shop For Men</h1>


<p className='mt-4 mb-6 font-semibold text-[#8d8882]  leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida </p>

<a href='#!' className='px-9 py-3 text-white rounded-3xl font-semibold bg-[#567174] ' style={{alignSelf:'flex-start'}}>Explore</a>


    </div>

    </div>
    </SplideSlide>

})}

</Splide>


</div>
</div>
    )
}