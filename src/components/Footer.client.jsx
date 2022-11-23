import {BiMessageRounded,BiMessageAlt} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {Link} from '@shopify/hydrogen'
import { useEffect,useState } from 'react'
import axios from 'axios'


export default function Footer({pages}){

const [footerReleated,setFooterReleated] = useState({});

useEffect(()=>{

  axios.get('https://sahhmallllc.myshopify.com/admin/api/2022-10/shop.json',{
    headers:{
      'X-Shopify-Access-Token' : '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',
      
    }
  }).then(resp=>{

    
    setFooterReleated(resp.data.shop)
  }).catch(err=>{
    console.log(err);
  })

  

},[])

  return (
        <div className=' px-20 pt-24 pb-10 SMMax:px-6 SMMax:pt-5 SMMax:pb-5   '>




{/* <div className='bg-[#2960f8]  py-[80px] px-16 mb-24 flex items-center rounded-3xl '>


<p className='text-white font-semibold text-5xl'>Subscribe Newsletter</p>



<div className='ml-auto flex gap-x-8  text-[#96b1fc]'>


<div className='bg-[#5883fa] font-semibold w-[300px] flex border rounded-lg items-center gap-x-3 px-3'>

<BiMessageRounded size={24}/>

<input className='bg-transparent py-3.5 placeholder:text-[#96b1fc] text-md outline-none ' type='text' placeholder='Enter your email' />


</div>

<button className='px-4 py-3.5 font-bold bg-white text-[#4273f9] rounded-xl'>Subscribe</button>


</div>




</div> */}




<div className='flex border-2  py-5'>


<div className=' flex SMMax:flex-col SMMax:px-3 SMMax:gap-y-6   w-full  justify-center gap-x-48 text-black font-semibold'>

<div >
<h2 className='text-gray-500 font-bold text-2xl mb-6 SMMax:mb-3 '>Service</h2>

<div className='flex flex-col gap-y-5 SMMax:gap-y-4'>
<p>About Us</p>
<p>Contact Us</p>
<p>Features</p>
<p>Blog</p>
</div>

</div>

<div className=''>
<h2 className='text-gray-500 font-bold text-2xl mb-6 SMMax:mb-3'>Pages</h2>

<div className='flex flex-col gap-y-5 SMMax:gap-y-4'>
  {pages?.nodes.map(eachPage=>{
    return <Link className='capitalize' to={`/pages/${eachPage.handle}`}>{eachPage.title}</Link>
  })}


</div>

</div>




<div   >
<h2 className='text-gray-500 font-bold text-2xl mb-6 SMMax:mb-3'>Contact</h2>

<div className='flex flex-col gap-y-5'>
<p className='flex gap-x-3 items-center'>
<span className='pt-1'><BiMessageAlt/></span>
  <span>{footerReleated.customer_email}</span>
</p>

<p className='flex gap-x-3 items-center'>
  <span><BsFillTelephoneFill/></span>
<span>+1({footerReleated.phone?.substring(0,3)}){footerReleated.phone?.substring(3,6)}-{footerReleated.phone?.substring(6,10)} </span>

</p>


<p>

{footerReleated.address1} {footerReleated.address2} {footerReleated.city} {footerReleated.province} {footerReleated.zip} 

</p>

{/* <div className='flex justify-between font-bold text-md'>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<FaFacebookF/>

</a>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<AiOutlineTwitter/>
</a>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<FaInstagram/>
</a>

</div> */}


</div>

</div>

</div>

</div>



<div className='mt-24 SMMax:mt-12 mb-7 bg-gray-500 h-0.5 w-full'></div>
 

<div className='flex text-sm justify-center text-gray-500 font-semibold ' >


&#169; 2022 {footerReleated.domain?.split(".")[0]}. All rights reserved

</div>



</div>
    )
}