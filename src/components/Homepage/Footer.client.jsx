import {BiMessageRounded,BiMessageAlt} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'



export default function Footer(){
    return (
        <div className=' px-20 pt-24 pb-10 bg-[#020418] '>




<div className='bg-[#2960f8]  py-[80px] px-16 mb-24 flex items-center rounded-3xl '>


<p className='text-white font-semibold text-5xl'>Subscribe Newsletter</p>



<div className='ml-auto flex gap-x-8  text-[#96b1fc]'>


<div className='bg-[#5883fa] font-semibold w-[300px] flex border rounded-lg items-center gap-x-3 px-3'>

<BiMessageRounded size={24}/>

<input className='bg-transparent py-3.5 placeholder:text-[#96b1fc] text-md outline-none ' type='text' placeholder='Enter your email' />


</div>

<button className='px-4 py-3.5 font-bold bg-white text-[#4273f9] rounded-xl'>Subscribe</button>


</div>




</div>




<div className='flex  '>

<div className=' w-[20%]'>

<div>

<div className='w-full h-24 '></div>

</div>


<p className='font-semibold  mt-5'>Create, distribute, and monetize your podcast all for free.</p>


</div>

<div className=' flex  flex-grow justify-center gap-x-48 text-white font-semibold'>

<div >
<h2 className='text-gray-500 font-bold text-2xl mb-6'>Service</h2>

<div className='flex flex-col gap-y-5'>
<p>About Us</p>
<p>Contact Us</p>
<p>Features</p>
<p>Blog</p>
</div>

</div>

<div className=''>
<h2 className='text-gray-500 font-bold text-2xl mb-6'>Resources</h2>

<div className='flex flex-col gap-y-5'>
<p>Apps</p>
<p>Developer</p>
<p>Integration</p>
<p>Pricing</p>
</div>

</div>




<div   >
<h2 className='text-gray-500 font-bold text-2xl mb-6'>Contact</h2>

<div className='flex flex-col gap-y-5'>
<p className='flex gap-x-3 items-center'>
<span className='pt-1'><BiMessageAlt/></span>
  <span>podia@gmail.com</span>
</p>

<p className='flex gap-x-3 items-center'>
  <span><BsFillTelephoneFill/></span>
  <span>+1(302)931-4524</span>
</p>


<div className='flex justify-between font-bold text-md'>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<FaFacebookF/>

</a>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<AiOutlineTwitter/>
</a>

<a href='#!' className='w-8 h-8 rounded-full flex justify-center items-center border-2'>
<FaInstagram/>
</a>

</div>
</div>

</div>

</div>

</div>



<div className='mt-24 mb-7 bg-gray-500 h-0.5 w-full'></div>


<div className='flex text-sm justify-center text-gray-500 font-semibold' >

&#169; 2022 Podia.com. All rights reserved

</div>



</div>
    )
}