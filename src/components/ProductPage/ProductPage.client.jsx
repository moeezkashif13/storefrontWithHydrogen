
import {useRef, useEffect, useState } from 'react'
import {AiFillStar,AiOutlineClose,AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import {BsStarHalf,BsCart,BsStarFill,BsStar} from 'react-icons/bs'

import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';


// import { addToCart, modifyProductFromCart, selectItems } from '../../slices/orderSlice';
// import {useDispatch,useSelector} from 'react-redux'


// import axiosClient from '../../utils/axiosDefaults';
// import { calculateAverage, extractDataFromStrapiResponse } from '../../utils';

// import QueryString from 'qs'

// import { Rate } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { v4 as uuidv4 } from 'uuid';
// const qs = require('qs');


const applyReactToast = (message)=>{
    const customId = Math.floor(Math.random()*1000);
    
    toast(message,{pauseOnHover:false,type:'success',autoClose:2000,toastId:customId})
}

const SelectSize = (event)=>{


    const selectedSizeDiv =  event.target
    const allSizes = document.querySelectorAll('.check');

    
    allSizes.forEach(eachSize=>{
        eachSize.style.background = 'transparent'
        eachSize.style.color = 'black'
    })
    
    selectedSizeDiv.style.background = 'black'
    selectedSizeDiv.style.color = 'white';


    setSelectedSize(selectedSizeDiv.textContent)

applyReactToast(`${selectedSizeDiv.textContent} Size Selected`)


}




const SelectColor = (event,color)=>{





    const selectedSizeDiv =  event.target
    const allSizes = document.querySelectorAll('.colors');

    
    allSizes.forEach(eachSize=>{
        eachSize.style.scale = '1'

        // eachSize.style.color = 'black'
    })
    
    selectedSizeDiv.style.scale = '1.5'

    
    setSelectedColor(color)

    applyReactToast(`${color} Color Selected`)


}



export default function ProductPage({productData}){

    console.log(productData);
const {vendor,title,options,variants,media} = productData;


const getSizesArray = options.filter(eachOption=>{
    return eachOption.name == 'Size'
});




    const [productCount,setProductCount] = useState(1);

const [selectedSize,setSelectedSize] = useState(null); 

const [selectedColor,setSelectedColor] = useState(null); 


const [disabledAddToCart,setDisabledAddToCart] = useState(false);

const [showMiniCart,setShowMiniCart] = useState(false)

const secondDateObj = new Date();


    return(

        <div className="bg-[#fafaf9] relative">

            
        <ToastContainer />



<div className='flex justify-end px-20 py-20 text-3xl'>

<BsCart/>

<p className='text-lg font-bold'>0000</p>


</div>



<div className='secondLine bg-black h-2 absolute top-0 left-0' style={{width:'50px'}}></div>


{/* MINI CART MODAL */}

{showMiniCart&&


<div className='absolute w-full h-full z-10' style={{transition:'all 0.5s linear',backgroundColor:'rgba(0,0,0,0.8)'}}>


<div className=' text-white pt-5 flex justify-end pr-12 text-5xl'>

<AiOutlineClose  className='cursor-pointer' onClick={()=>setShowMiniCart(false)}  />

</div>



<div className='flex justify-center py-12 gap-x-5 gap-y-6 flex-wrap'>


{[123213,213213]?.map((eachProduct,index)=>{



return <div key={index} className='w-[300px] bg-red-500 '>

<div className='w-full h-[270px] bg-yellow-500'></div>

<div className='py-4 px-5'>
{/* <p>{eachProduct.title}</p> */}

<div className='flex text-xl items-center gap-x-3 mt-4 justify-between'>

<div className='flex justify-center items-center cursor-pointer rounded-full w-9 h-9 bg-yellow-500'>

<AiOutlineMinus/>

</div>


{/* <p className='font-semibold'>{eachProduct.productCount}</p> */}
{/* <p className='font-semibold'>PRODUCT ID{eachProduct.id}</p> */}



<div  onClick={()=>{


    // dispatch(modifyProductFromCart(eachProduct.id))


}}  className='flex justify-center cursor-pointer items-center rounded-full w-9 h-9 bg-yellow-500'>

<AiOutlinePlus/>

</div>


</div>
</div>


</div>

})}

</div>


<div className='flex justify-center'>
<button  onClick={()=>{

// setShowMiniCart(false);

}}  style={{transition:'all 0.4s linear'}} 


className="  bg-black px-7 mx-auto text-white py-4 font-bold rounded-lg


">Close Mini Cart</button>




</div>



</div>

}


{/* MINI CART MODAL */}



            <div className="flex px-24 py-40">


<div className="w-[60%]  flex">
    

    <div className="flex flex-col gap-y-4">

    {media.nodes.map((imageReleated,index)=>{
console.log(imageReleated);
const {previewImage} = imageReleated;

return <div style={{backgroundImage:`url(${previewImage.url})`}} className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat "></div>


})}


    </div>


<div className="ml-3 w-full flex flex-col gap-y-3">

{/*  */}

{/* HEREEEE MAINNN IMAGEEE */}
{/* <div className="w-full h-[600px]    bg-[#f6f6f5] flex items-center bg-blue-500" > */}


<Splide hasTrack={false} options={{height:'600px',perPage:1,pagination:false,
autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:2000
}}>

<SplideTrack >
    
{media.nodes.map((imageReleated,index)=>{
    const {image} = imageReleated;
    return <SplideSlide ><div  className='w-full h-[95%] bg-contain  bg-center bg-no-repeat'  style={{backgroundImage:`url(${image.url})`}}  ></div></SplideSlide>
})}
</SplideTrack>

</Splide>


{/* {[1,2,3,4,5,6].map((elem,index)=>{

return <div key={index} className='w-full h-[95%] bg-yellow-500 bg-contain bg-center bg-no-repeat' ></div>


})} */}




{/* </div> */}


{/* HEREEEE MAINNN IMAGEEE */}



{/*  */}

{/* {['https://media.gq.com/photos/623cc30d9233ab2e539ed369/master/w_2000,h_1333,c_limit/jackets-14.jpg','https://www.hellyhansen.com/media/catalog/product/3/0/30263_990-2-main3.jpg?quality=90&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560','https://cf.shopee.ph/file/b12509df5340bbd6bcfffa2ad48f3110'].map((elem)=>{
    return <div className="w-full   bg-[#f6f6f5] h-[600px] flex items-center" >

<div className='w-full h-[95%]  bg-contain bg-center bg-no-repeat' style={{backgroundImage:`url(${elem})`}}></div>

    </div>
})} */}



</div>



</div>



<div className="w-[40%]  pl-20 flex flex-col gap-y-5">
    

<p className='font-semibold'>{vendor}</p>

<div className='bg-red-500 px-4 pt-5 pb-4 cursor-pointer text-center font-bold ' onClick={()=>{
    localStorage.removeItem('persist:root');
}}>Clear Storage</div>

<h1 className='font-semibold'>{title}</h1>


<div className="flex gap-x-2  items-center">

<div className='flex gap-x-1'>
        
        {/* <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>

        <AiFillStar /> */}

{/* <BsStar  />
<BsStarFill/>

<BsStarHalf/> */}





</div>

{/* <p className='text-sm font-semibold'>{calculateAverage([3,3,3,5,5,5,5,5,5,])}</p> */}

</div>

<div className='text-xl font-semibold'>

<p>Price: $400000.00</p>

</div>


<div >

<div className="px-3 py-3 border rounded-lg     w-full flex">

<p className='font-bold'>$34.50</p>

<div className="ml-5">
    <p>from <span className="font-bold">Douglas</span></p>
    <p className="mt-2">+$4.50 shipping</p>
</div>

<div className="w-16 rounded-lg h-10 bg-contain bg-center bg-no-repeat ml-auto" style={{backgroundImage:'url(/visalogo.svg)'}}></div>

</div>

</div>


<div className='flex justify-between items-center text-2xl my-3'>

<div onClick={()=>{


if(productCount<=1){
    return
}

setProductCount(oldVal=>oldVal-1);




}} className='w-11 h-11 rounded-full bg-red-500 flex items-center justify-center cursor-pointer'><AiOutlineMinus/></div>

<div className=' font-bold '  >{productCount}</div>

<div onClick={()=>setProductCount(oldVal=>oldVal+1)} className='w-11 h-11 rounded-full bg-red-500 flex items-center justify-center cursor-pointer'><AiOutlinePlus/></div>


</div>




<button  style={{transition:'all 0.4s linear'}} 

    disabled={(!selectedSize||!selectedColor || disabledAddToCart)&&true}






className="w-full  bg-black text-white py-4 font-bold rounded-lg

    disabled:bg-slate-300


">Add to Cart</button>


<button onClick={()=>{

setShowMiniCart(true);

}}  style={{transition:'all 0.4s linear'}} 


className="w-full  bg-black text-white py-4 font-bold rounded-lg


">View Mini Cart</button>


<button style={{transition:'all 0.4s linear'}} 


    disabled={(!selectedSize||!selectedColor)&&true}



className={`w-full  ${(!selectedSize||!selectedColor)?'py-4':'py-0'} flex justify-center items-center bg-black text-white  font-bold rounded-lg


   disabled:bg-slate-300



`}>


{(!selectedSize||!selectedColor)?<p >Go to Checkout</p>:<Link  href='/checkout'>
    
    <a className='w-full py-4 '>Go to Checkout</a>

    </Link>}



</button>



<div >


{/* {ProductFeatures.length>0&&

<>
<div className="flex justify-between relative tabsContainer">
    
<div className=' h-1 -bottom-3 bg-black absolute blackLine' style={{transition:'all 0.3s'}}></div>


{ProductFeatures.map(eachFeature=>{

return <p   onClick={(event)=>openCity(event, eachFeature.id)}   className='cursor-pointer tablinks '>{eachFeature.FeatureName}</p>

})}


</div>



<div >


{ProductFeatures.map(eachFeature=>{

return <p id={eachFeature.id}  className="tabcontent   mt-6 mb-4 leading-6">{eachFeature.FeatureDescription} </p>

})}



<span className="cursor-pointer font-bold underline ">Read More</span>




</div>



</>


} */}


</div>



    
<div className='flex flex-wrap  text-md font-semibold sizeDivContainer  '>
    
{getSizesArray[0].values.map((eachSize,index)=>{

    // return  <div key={index} onClick={SelectSize} style={{transition:'all 0.3s linear '}} className=' check  w-1/3 py-3 text-center  cursor-pointer'>{eachSize}</div>

    return  <div key={index} onClick={SelectSize} style={{transition:'all 0.3s linear '}} className=' check  w-1/3 py-3 text-center  cursor-pointer'>{eachSize}</div>


})}


</div>


{/* {ProductColor.length>0&&

<ColorsBox ProductColors={ProductColor} selectColor={SelectColor} />


} */}



<div className=" flex flex-col gap-y-0">


{variants.nodes.map((elem,index)=>{

const {priceV2,title} = elem;


return         <div key={index} className="cursor-pointer px-3 py-5 avienBro     w-full flex">

<p className='font-bold'>${priceV2.amount}</p>

<div className="ml-5">
    <p className=' font-semibold'>{title}</p>
</div>



</div>


})}


</div>



</div>

            </div>

{/* REVIEWS CONTAINER */}
<div className='pl-20 pr-28'>


<h1 className='mb-8 font-bold text-3xl'>Most Relevant Reviews</h1>



<div className='flex flex-col gap-y-6'>

{[{PublishedOrUpdatedTime:'Tue Nov 15 2022 18:48:54 GMT+0500 (Pakistan Standard Time)',Name:'dsad',Review:'cadasd',ShortReview:'faasd'}]?.map((eachComment,index)=>{

const {PublishedOrUpdatedTime,Name,Review,ShortReview} = eachComment;



const firstDateObj = new Date(PublishedOrUpdatedTime);

var diff = secondDateObj.getTime() - firstDateObj.getTime();   

var daydiff = diff / (1000 * 60 * 60 * 24);   



    return     <div key={index}>
    
    <div className='flex'>

<div className='flex w-[220px] gap-x-4 items-center ' style={{alignSelf:'flex-start',minWidth:'230px'}}>

<div className='w-12 h-12 rounded-full bg-orange-500'></div>

<div className='mt-1'>
    <p className='font-semibold mb-0.5'>{Name}</p>
    <p className='text-sm'>{ daydiff.toFixed()==0?'Few Moments Ago': daydiff.toFixed()+'days ago' } </p>
</div>


</div>



<div className='flex flex-col gap-y-1.5 '>

<div className='flex gap-x-1.5 text-sm' style={{color:'#fea924'}}>
    
<BsStarFill/>
<BsStarFill/>
<BsStarFill/>
<BsStarFill/>
<BsStarFill/>

    
</div>

<p className='capitalize font-bold text-lg '>{ShortReview} </p>

<p className=' leading-5 font-semibold text-sm'>{Review}</p>


<div className='flex gap-x-3 mt-2'>


<div className='flex cursor-pointer gap-x-2 border px-4 py-1.5 rounded-3xl '>
    <i>ic</i>
    <p>(12)</p>
</div>

<div className='flex cursor-pointer gap-x-2 border px-4 py-1.5 rounded-3xl '>
    <i>ic</i>
    <p>(12)</p>
</div>



</div>



</div>


    </div>


<div className='w-full h-0.5 mt-4 bg-red-500'></div>


    </div>


})}




</div>




<div className='flex flex-col pb-32 gap-y-3  pt-7 text-[#9fa4af]'>

{/* <input ref={reviewUserName} className='rounded-lg outline-none py-4 px-6' type='text' placeholder='Name' />

<input ref={shortReviewRef} className='rounded-lg outline-none py-4 px-6' type='text' placeholder='Short Review' /> */}


{/* <textarea placeholder='Review' ref={userReview}  className='rounded-md outline-none resize-none w-full h-[400px] px-6 py-5' /> */}


{/* <p className='text-lg text-center font-bold text-green-500 capitalize'>{commentrelatedmessage}</p> */}


<button  className='ml-auto mt-4 bg-blue-500 text-white font-semibold px-5 py-3.5 rounded-2xl'>Submit Review</button>


</div>



</div>


{/* REVIEWS CONTAINER */}





        </div>

        )

}