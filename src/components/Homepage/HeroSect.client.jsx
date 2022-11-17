import {Splide,SplideSlide, SplideTrack} from '@splidejs/react-splide'
import { useEffect, useState } from 'react';

import {AiOutlineSearch,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

import {Link} from '@shopify/hydrogen'


const checkArr = ['https://richardsclothing.ca/wp-content/uploads/2018/11/fi6-e1546084492454.jpg','https://st3.depositphotos.com/2056297/14632/i/600/depositphotos_146328163-stock-photo-portrait-of-handsome-man.jpg','https://w0.peakpx.com/wallpaper/143/88/HD-wallpaper-man-in-suit-suit-male-model-interior-black-tie-man-chair-business.jpg','https://www.suitsexpert.com/wp-content/uploads/2019/04/men-suit-styles-differences-and-types.jpg']

export default function HeroSect({fetchedProducts}){


    useEffect(()=>{

fetch('https://sahhmallllc.myshopify.com/admin/access_tokens/delegate.json',{
    method:'POST',
    headers:{
        'X-SHOPIFY-ACCESS-TOKEN':'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'
    },
    body:{
        "delegate_access_scope": [
            "write_orders"
          ],
          "expires_in": 3600
        
    }
}).then(resp=>{
    resp.json().then(check=>{
        console.log(check);
    })
})

    },[])


    // Shuffle array
const shuffled = fetchedProducts.nodes.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 5);

    

    const [differenceValue,setDifferenceValue] = useState(0);


    
    useEffect(()=>{
        document.querySelectorAll('.paginationOutside')[0].classList.add('paginationOutsideActive')
    },[])



    const HomepageHeroSectPagination = (event,elementIndex)=>{

        
        const activeElement = document.querySelector('.paginationOutsideActive');
        
        const clickedElement = event.target;

        // console.log(activeElement);

// console.log(clickedElement);


        // console.log(activeElement.offsetLeft);
        // console.log(clickedElement.offsetLeft);

        const getDifferenceInTwoElements = Math.abs(activeElement.offsetLeft - clickedElement.offsetLeft);

       
        setDifferenceValue(oldVal=>{
            console.log(oldVal);

if(oldVal<getDifferenceInTwoElements){
console.log('iffff');

activeElement.style.transform = `translateX(${getDifferenceInTwoElements}px)`

clickedElement.style.transform = `translateX(${-getDifferenceInTwoElements}px)`

}else{

    console.log('elseeee');

    activeElement.style.transform = `translateX(${getDifferenceInTwoElements}px)`
    
    clickedElement.style.transform = `translateX(${getDifferenceInTwoElements}px)`

}
            return getDifferenceInTwoElements;

        })
        
        // console.log(getDifferenceInTwoElements);

        
        // console.log(clickedElement.querySelector('.paginationOutside'));
        
        // clickedElement.style.transform = 'translateX(150px)'
        

        }


    return (
        <div className=" h-[95vh] relative">

        <div className='bg-[#112224] w-[95%] z-10  font-semibold py-3.5 px-7 top-6 absolute rounded-3xl text-white flex items-center justify-between  ' style={{left:'50%',transform:'translateX(-50%)'}}>


<p className='font-bold text-lg'>LAUTARO</p>

<div className='flex uppercase gap-x-4  text-sm text-[#879293]'>


{[{attributes:{CategoryName:'First',Slug:'SLUG'}}].map((eachCateg,index)=>{
const {CategoryName,Slug} = eachCateg.attributes;

if(index<7){
    return <a href={`/category/${Slug}`} >{CategoryName}</a>   
}
})}

<a href='#!' >Show All</a>   

</div>

<div className='flex gap-x-7 items-center text-[#879293]'>

<div className='flex gap-x-1 items-center'>
    <AiOutlineHeart size={18} />
<p>(0)</p>
</div>

<div className='flex gap-x-1 items-center'>
<AiOutlineHeart size={18} />

<p>(0)</p>
</div>

</div>


</div>



{/* PAGINATION */}

<div className='flex absolute z-10  w-full bottom-10 justify-center gap-x-4'>

{selected.map((elem,index)=>{
return <div onClick={(event)=>HomepageHeroSectPagination(event,index)} className='paginationOutside  cursor-pointer w-[16px] h-[16px] rounded-full border flex justify-center items-center' style={{transition:'all 2s'}}>
    <div className={`w-[8px] h-[8px] rounded-full  `}></div>
</div>
})}


</div>

{/* PAGINATION */}




<Splide  className='relative h-full' hasTrack={false} options={{pagination:false,arrows:false,perPage:1,type:'loop',autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:2000}} >




<SplideTrack className='h-full '>

{selected.map(elem=>{
    
    const {featuredImage,title,handle} = elem;

return <SplideSlide className='relative bg-cover bg-center bg-no-repeat' 

style={{backgroundImage:`url(${featuredImage.url})`}}


>
    
    

    <div className='absolute font-semibold right-8 bottom-10  w-[25%] flex flex-col items-end justify-end'>

<h1 className='uppercase text-right text-2xl text-[#aeaaa2] font-medium'>{title}</h1>

<p className='mt-4 mb-7 text-[#888a85]  text-xl' >$115.50</p>

<Link to={`/product/${handle}`} className='px-6 py-2.5  cursor-pointer border-2 border-[#9b9590] text-[#9b9590] rounded-3xl'>SHOP NOW</Link>

    </div>



    
    </SplideSlide>
})}


</SplideTrack>

</Splide>




        </div>
    )
}