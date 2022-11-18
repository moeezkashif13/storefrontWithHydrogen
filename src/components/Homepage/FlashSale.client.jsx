import {Splide,SplideSlide, SplideTrack} from '@splidejs/react-splide'
import {Link } from '@shopify/hydrogen'

export default function FlashSale({flashSaleProducts}){

    const mainArrForProds = [];


const getOnSaleVariants = flashSaleProducts.nodes.map(eachProduct=>{

    const {title:productTitle,handle} = eachProduct;

    
    const Check = eachProduct.variants.nodes.map(eachVariant=>{
        const {compareAtPrice} = eachVariant;
        // if(compareAtPrice){
        //     return eachVariant;
        // }
        return compareAtPrice&&{
            productTitle,
            handle,
            eachVariant
        }
    }).filter(eachElem=>{
        return eachElem !==null
    });

    return{
        
        productTitle,
        Check
    }
});

 getOnSaleVariants.forEach(eachCheck=>{

    
    mainArrForProds.push(...eachCheck.Check)

})




    return(

<div className='pb-10 pt-10'>

<div className='px-10 text-5xl mb-6'>Flash Sale!</div>


{/* <div className='flex flex-col h-[550px] bg-red-500'>  */}

<Splide className=' flex ' options={{fixedWidth:'300px',gap:'40px',padding:'12rem',type:'loop',pagination:false,

autoplay:true,pauseOnHover : false,pauseOnFocus:false,interval:2000,

mediaQuery:'max',

breakpoints:{
    500 : {
        padding:'2rem'
    }
}



}}>

{mainArrForProds.map((elem,index)=>{


const {eachVariant,productTitle,handle} = elem;

const {title,compareAtPrice,price,image} = eachVariant;


    return <SplideSlide > <Link to={`/product/${handle}`}> <div style={{marginTop:index%2==0?'100px':0}}  className='  h-[550px]  '  >


<div className='h-[380px]  w-full  gradientBackground bg-cover bg-x-center bg-no-repeat	' style={{backgroundPositionY:'20x',backgroundImage:`url(${image.url})`}}></div>

<div className='flex flex-col text-[16px] font-semibold pt-5'>
    <p className='w-[75%] '>{productTitle}</p>

    <p className=' mt-5 mb-2 ml-auto text-red-500'>Old: ${compareAtPrice.amount}</p>
    <p className='ml-auto'>Sale Price: ${price.amount}</p>


</div>


    </div>

    </Link>

    </SplideSlide>
})}

</Splide>

 {/* </div>  */}




</div>


)
}