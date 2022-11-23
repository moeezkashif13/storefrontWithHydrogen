import { Link } from "@shopify/hydrogen";

import {useEffect,useState} from 'react'

export default function Notification({fetchedProducts}){


    
    useEffect(()=>{

        setTimeout(() => {
            document.querySelector('.checkBroAvien').style.bottom = '5%';
        }, 2000);
        
        setTimeout(() => {
            document.querySelector('.checkBroAvien').style.bottom = '-100%';
            document.querySelector('.checkBroAvien').style.transition = 'all 1.5s';
        }, 60000);

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

    

return(
    <Link to={`/product/${dynamicRandomProd?dynamicRandomProd.handle:randomProductOneTime?.handle}`}>
<div className=" flex fixed bg-black text-white w-[400px] SMMax:w-[85%]  -bottom-[100%] left-8 SMMax:left-2 z-20 checkBroAvien" style={{transition:'all 0.5s'}}>

    <div className='w-[100%] h-[100px] h-full  bg-contain bg-center bg-no-repeat' style={{backgroundImage:`url(${dynamicRandomProd?dynamicRandomProd.featuredImage.url:randomProductOneTime.featuredImage.url})`}}></div>

<div className='px-3 py-3 font-semibold'>

<span className='SMMax:text-sm'>A customer has purchased {dynamicRandomProd?dynamicRandomProd.title:randomProductOneTime?.title} successfully</span>


</div>

</div>

</Link>

)


}