import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Cart/Drawer.client";
import { CartDetails, } from "./Cart/CartDetails.client";

import {BiListUl} from 'react-icons/bi'

export default function Header({ shop,pages }) {

  
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  
  const isHome = pathname === "/";
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <header
        role="banner"
        className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0  w-full leading-none gap-4 antialiased transition shadow-sm ${
          isHome ? "bg-black/80 text-white" : "bg-white/80"
        }`}
      >
        <div className="flex gap-12 ">
          <Link className="font-bold" to="/">
            {shop.name}
          </Link>
        </div>

        <div className="flex bg-red-500 gap-x-5 ml-10">

{/* {pages.nodes.map(eachPage=>{
  
  return <Link to={`/pages/${eachPage.handle}`}>
 
<div className="capitalize">{eachPage.title}</div>

  </Link>
})} */}

        </div>

<div className="ml-auto flex gap-x-8">
        <button
          onClick={openDrawer}
          className="relative  flex items-center justify-center w-8 h-8"
        >
          <IconBag />
          <CartBadge dark={isHome} />
        </button>
        

        

       {/* <button onClick={()=>{

  document.querySelector('.headerDropdown').classList.toggle('bringDropdown');

}}
          className="relative  flex items-center justify-center w-8 h-8"

>

<IconBag />
          <CartBadge dark={isHome} />

</button> */}

        
        {screen?screen.width<500&&       <button onClick={()=>{

document.querySelector('.headerDropdown').classList.toggle('bringDropdown');

}}
        className="relative  flex items-center justify-center w-8 h-8"

>

<BiListUl size={20}/>

</button>:null}
        
        
        </div>






      </header>
      

<div className="w-full h-full absolute headerDropdown  z-20 font-semibold text-lg " style={{transition:'all 1.5s ',top:'-100%'}} >

{screen?screen.width<500&& <>
<div className="bg-white  w-full pt-20 pb-10 px-6 flex flex-col gap-y-4">
<div>

<p>HOME</p>
<div className="h-0.5 w-full bg-gray-500 mt-1"></div>
</div>

<div>

<p>HOME</p>
<div className="h-0.5 w-full bg-gray-500 mt-1"></div>
</div>


<div>

<p>HOME</p>
<div className="h-0.5 w-full bg-gray-500 mt-1"></div>
</div>

<div>

<p>HOME</p>
<div className="h-0.5 w-full bg-gray-500 mt-1"></div>
</div>

</div>

</>



:null   }

</div>


    </>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark ? "text-black bg-white" : "text-white bg-black"
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}
