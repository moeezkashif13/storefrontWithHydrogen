import {Splide,SplideSlide, SplideTrack} from '@splidejs/react-splide'
import { useEffect, useState } from 'react';

import {AiOutlineSearch,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

import {Link} from '@shopify/hydrogen'


const checkArr = ['https://richardsclothing.ca/wp-content/uploads/2018/11/fi6-e1546084492454.jpg','https://st3.depositphotos.com/2056297/14632/i/600/depositphotos_146328163-stock-photo-portrait-of-handsome-man.jpg','https://w0.peakpx.com/wallpaper/143/88/HD-wallpaper-man-in-suit-suit-male-model-interior-black-tie-man-chair-business.jpg','https://www.suitsexpert.com/wp-content/uploads/2019/04/men-suit-styles-differences-and-types.jpg']

export default function HeroSect({collections,fetchedProducts}){


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

        useEffect(()=>{

            setTimeout(() => {
                document.querySelector('.checkBroAvien').style.bottom = '5%';
            }, 2000);
            
            setTimeout(() => {
                document.querySelector('.checkBroAvien').style.bottom = '-100%';
                document.querySelector('.checkBroAvien').style.transition = 'all 1.5s';
            }, 5000);

        },[])

        function getRandomItem(arr) {

            // get random index value
            const randomIndex = Math.floor(Math.random() * arr.length);
        
            // get random item
            const item = arr[randomIndex];
        
            return item;
        }
        
        
        const randomProductOneTime = getRandomItem(fetchedProducts.nodes);


        const [dynamicRandomProd,setDynamicRandomProd] = useState();

        useEffect(()=>{

const randomTime = Math.random() * ('150' - '60') ;


const toFixedRandomTime = randomTime.toFixed(0);

const mainRandomProd = getRandomItem(fetchedProducts.nodes)


setTimeout(() => {
    setDynamicRandomProd(mainRandomProd);
    document.querySelector('.checkBroAvien').style.bottom = '5%';
}, toFixedRandomTime*1000);

setTimeout(() => {
    document.querySelector('.checkBroAvien').style.bottom = '-100%';
    document.querySelector('.checkBroAvien').style.transition = 'all 1.5s';
}, (toFixedRandomTime*1000)+3000);


        },[dynamicRandomProd])

// const selectRandomProd = fetchedProducts


    return (
        <div className=" h-[95vh] relative ">

<Link to={`/product/${dynamicRandomProd?dynamicRandomProd.handle:randomProductOneTime?.handle}`}>
<div className=" flex fixed bg-black text-white w-[400px] -bottom-[100%] left-8 z-20 checkBroAvien" style={{transition:'all 0.5s'}}>

    <div className='w-[100%] h-[100px] h-full  bg-contain bg-center bg-no-repeat' style={{backgroundImage:`url(${dynamicRandomProd?dynamicRandomProd.featuredImage.url:randomProductOneTime.featuredImage.url})`}}></div>

<div className='px-3 py-3 font-semibold'>

<span >A customer has purchased {dynamicRandomProd?dynamicRandomProd.title:randomProductOneTime?.title} successfully</span>


</div>

</div>

</Link>



        {/* <div className='SMMax:hidden  bg-[#112224] w-[95%] z-10  font-semibold py-3.5 px-7 top-6 absolute rounded-3xl text-white flex items-center justify-between  ' style={{left:'50%',transform:'translateX(-50%)'}}>


<p className='font-bold text-lg'>LAUTARO</p>

<div className='flex uppercase gap-x-4  text-sm text-[#879293]'>


{/* 

{collections.nodes.map((eachCateg,index)=>{


    const {title,products} = eachCateg;
// onClick={()=>showProductsByCategory(Slug)}
    return <div key={index}  className='flex'><p>{title}</p><p className='ml-auto'>{products.nodes.length}</p></div>


})}

{collections.nodes.map((eachCateg,index)=>{
    const {title,products} = eachCateg;

    return <a href={`#!`} >{title}</a>   
    

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


</div> */}



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

style={{backgroundImage:`url(${featuredImage.urllll})`}}


>
    
    

    <div className='absolute font-semibold right-8 bottom-10 SMMax:px-5 SMMax:bottom-16  w-[25%] SMMax:w-full SMMax:right-0 flex flex-col items-end justify-end text-red-500'>

<h1 className='uppercase text-right text-2xl SMMax:text-lg  font-medium'>{title}</h1>

<p className='mt-4 mb-7   text-xl' >$115.50</p>

<Link to={`/product/${handle}`} className='px-6 py-2.5  cursor-pointer border-2 border-[#9b9590]  rounded-3xl'>SHOP NOW</Link>

    </div>



    
    </SplideSlide>
})}


</SplideTrack>

</Splide>




        </div>
    )
}