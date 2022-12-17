import {AiOutlineSearch,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'


import {useEffect,useState} from 'react'

import {Link} from '@shopify/hydrogen'

const newArrivalEachProduct = (event)=>{

    const mainElement = event.target.parentElement.querySelector('.toBeHidden');
    
    
    if(mainElement){
    
    mainElement.style.visibility = 'visible';
    mainElement.style.opacity = 1;
    }
    
    }
    
    const leaveNewArrivalEachProduct = (event)=>{
    
        const mainElement = event.target.parentElement.querySelector('.toBeHidden');
    if(mainElement){
        mainElement.style.visibility = 'hidden';
        mainElement.style.opacity = 0;
    }
    
    }
    
    
    const EachProductComponent = ({eachProduct,likeButtonState,handleProductLike})=>{
        
        const {title,featuredImage,handle} = eachProduct;


        const {url:featuredImageURL} = featuredImage;
        
        return  <Link  to={`/product/${handle}`}>
        <div className=' w-[292px]  relative ' onMouseEnter={newArrivalEachProduct} onMouseLeave={leaveNewArrivalEachProduct}>
    
    
    <div style={{visibility:'hidden',opacity:0,transition:'all 1s',backgroundColor:'rgba(0,0,0,0.7)'}} className='toBeHidden absolute w-full h-full z-10 top-0 left-0 flex justify-center items-center'>
    
    
    {/* <a  href={`productpage/${ProductSlug}`} ><div className='cursor-pointer font-semibold px-5 py-4 rounded-lg bg-red-500 '>Visit Product Page</div></a> */}
    
    
    </div>
    
    
    <div className='w-full h-[400px] relative bg-cover bg-center bg-norepeat ' style={{backgroundImage:`url(${featuredImageURL})`}} >
        
    <button disabled={likeButtonState} onClick={handleProductLike} className='z-20 absolute right-4 cursor-pointer top-4 text-3xl '>
    
    <AiOutlineHeart  color='greenyellow' />
    
    {/* <div className='my-4'></div>
    
    <AiFillHeart/> */}
    
    
    
    
    </button>
    
    <div className='flex absolute bottom-4 left-3 gap-x-2.5 text-xs font-bold cursor-pointer '>
    
    {/* {ProductColor.map((eachColor,index)=>{
        return <div key={index} style={{backgroundColor:eachColor.Color}} className='w-8 h-8  rounded-full flex justify-center items-center '>SM</div>
    })} */}
    
    </div>
    
    
    </div>
    
    <div className='mt-3 font-semibold'>
    
    <p >{title}</p>
    
    {/* <p className='text-right font-bold text-lg -my-2.5'>${ProductPrice}.00</p> */}
    
    <p>Chanel</p>
    
    </div>
    
    
    
        </div>
    
     </Link>
    }


export default function NewArrivals({collections,fetchedProducts}){

    
    
    const [check,setCheck] = useState(false);

    const [filterdProducts,setFilteredProducts] = useState([]);
    
    const [likeButtonState,setLikeButtonState] = useState(false)
    
    let filteredProductsArray = [];
    
    const showProductsByCategory = (slug)=>{
    
        filteredProductsArray = [];
    
    setFilteredProducts(null);
        
    
        // const filterProducts = fetchedProducts.map(eachProduct=>{
        //     const {Categories} = eachProduct.attributes;
        //         Categories.data.filter(eachCheck=>{
        //             if(eachCheck.attributes.Slug==slug){
        //                 filteredProductsArray.push(eachProduct)
        //             }
        //         })
        // });
    
        
    setFilteredProducts(oldVal=>{
        return [...filteredProductsArray]
    });
    
    
    }
    
    
    
            const handleProductLike  = (event)=>{
    
                // <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
    
                const toRemove = document.querySelector('#toRemove');
    let timeoutDefault = 100;
                const node = `<path style="opacity:0;transition:all 1s" id="toRemove" d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path> `
    
                
    //             if(toRemove){
    //                 toRemove.style.opacity = 0;
    
                    
    //                 setTimeout(() => {
    //                     toRemove.remove(node)
    //                 }, 1200);
                
    //             }
    
    
    setLikeButtonState(true);
    
    setCheck(checkVal=>{
        return !checkVal
    });
    
    
    if(!check){
    
        event.target.insertAdjacentHTML('beforeend',node)
    
        setTimeout(() => {
            
        event.target.querySelector('#toRemove').style.opacity = 1
    
        setLikeButtonState(false)
        
        }, timeoutDefault);
    
    }else{
    
        setTimeout(() => {
        event.target.style.opacity = 0
    
        setTimeout(() => {
            event.target.remove()
            
            setLikeButtonState(false)
    
        }, 800);
    
    
    }, timeoutDefault);
    
    }
            }


    return(

        <div className=' pt-16 pb-20'>

<div className='px-6 flex flex-col '>

{/* <div className='flex  SMMax:flex-col mb-12 bg-yellow-500'>

<div className='w-[30%] SMMax:w-full bg-red-500'>

<p className='text-[42px]'>New Arrival</p>

</div>


<div className='w-[70%] SMMax:w-full SMMax:mt-5 text-[#cecbc8]'>

<div className=' px-5 w-full bg-[#f9f3ef] rounded-3xl flex gap-x-2 items-center font-semibold text-sm'>

<AiOutlineSearch size='25'/>

<input type='text'  placeholder='Search Products' className='w-full bg-transparent outline-none py-4 placeholder:text-[#cecbc8]'/>


</div>

</div>

</div> */}



<div className='flex SMMax:flex-col  '>

{/*  */}

{/* <div  className='w-[30%]  SMMax:w-full flex flex-col gap-y-5 text-[#878889]'>

<div   >
<p className='font-semibold text-[#373e3e] mb-3'>Category</p>


<div className='uppercase cursor-pointer font-semibold text-sm flex flex-col    gap-y-2 pr-16'>



{collections.nodes.map((eachCateg,index)=>{


    const {title,products} = eachCateg;
// onClick={()=>showProductsByCategory(Slug)}
    return <div key={index}  className='flex'><p>{title}</p><p className='ml-auto'>{products.nodes.length}</p></div>


})}



</div>


</div>




 <div className='text-[#ffa9ac] font-semibold '>Clear Filters</div> 



</div> */}


{/*  */}


<div className='w-[100%]  SMMax:w-full '>

<h1 className='text-center text-4xl mb-8 font-bold'>New Arrivals</h1>


<div className='flex flex-wrap justify-between SMMax:justify-center SMMax:py-5 gap-x-4 gap-y-6 '>


{filterdProducts.length>0? fetchedProducts.nodes.map((eachProduct,index)=>{
    return <EachProductComponent key={index} handleProductLike={handleProductLike} likeButtonState={likeButtonState} eachProduct={eachProduct} />
}) : fetchedProducts.nodes.map((eachProduct,index)=>{
    return <EachProductComponent key={index} handleProductLike={handleProductLike} likeButtonState={likeButtonState} eachProduct={eachProduct} />
}) 

}


</div>


<div className='  SMMax:flex SMMax:justify-center SMMax:mb-6'>
<a href='/collections/all' ><div className='mx-auto cursor-pointer font-semibold text-white bg-black rounded-3xl mt-8 inline-block px-7 py-3.5'> See All Products </div></a>
</div>



</div>


</div>


</div>



</div>
        
    )

}
