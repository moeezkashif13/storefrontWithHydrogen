import {Splide,SplideSlide, SplideTrack} from '@splidejs/react-splide'
import {Link} from '@shopify/hydrogen'

export default function ExploreCategs({collections}){
    

    
    return(
        <div className='px-10 '>


<div className='flex w-full flex-wrap  gap-x-4'>

<Splide options={{perPage:2,height:'250px',pagination:false,gap:'20px',arrows:false, type:'loop',

// autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:3000,

autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:2000,


breakpoints: {
    500: {
destroy:true,


    },
}


}}>

{collections.nodes.map((elem,index)=>{

    return  <SplideSlide   > <div className={`h-full  ${index%2==0?'bg-[#eee7de]':'bg-[#eeece8]'} px-8 SMMax:px-3 SMMax:py-3     flex   SMMax:flex-col SMMax:my-5 `}>

    <div className='w-[40%] h-[250px] SMMax:w-full   h-full bg-cover  bg-norepeat ' 
    
    style={{backgroundImage:`url(${elem?.image.url})`}} 
    
    
    >


    </div>


    <div className='w-[60%] SMMax:w-full  h-full pl-7 SMMax:pl-0 flex flex-col  justify-center'>

<h1 className='text-4xl SMMax:text-2xl SMMax:mt-2 font-semibold'>Shop For {elem.title}</h1>


<p className='mt-4 mb-6 SMMax:mt-2 SMMax:mb-3 font-semibold SMMax:sm text-[#8d8882] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida </p>

<Link to={`/category/${elem.handle}`} className='px-9 py-3 text-white rounded-3xl font-semibold bg-[#567174] ' style={{alignSelf:'flex-start'}}>Explore</Link>


    </div>

    </div>
    </SplideSlide>

})}

</Splide>


</div>
</div>
    )
}