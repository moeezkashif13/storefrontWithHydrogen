import NewArrivals from "./NewArrivals.client";

import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import ExploreCategs from "./ExploreCategs.client";
import FlashSale from "./FlashSale.client";
import HeroSect from "./HeroSect.client";
import Footer from "./Footer.client";
import { useState } from "react";
import { fetchSync } from "@shopify/hydrogen";


export default function ServerReleated(){

    const {
        data:{products},
      } = useShopQuery({
        query: GetAllProductsForNewArrivals,
        cache: CacheLong(),

      });

      const {
        data:{products:CheckProducts},
      } = useShopQuery({
        query: GetAllVariantsForFlashSale,
        cache: CacheLong(),
      });

      const {
        data : {collections},
      } = useShopQuery({
        query: getCollectionsQuery,
        cache: CacheLong(),
      });

      const {
        data : {pages},
      } = useShopQuery({
        query: getPagesQuery,
        cache: CacheLong(),
      });

const check =       fetchSync('https://sahhmallllc.myshopify.com/admin/api/2022-10/shop.json',{
        headers:{
          'X-Shopify-Access-Token' : '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',
          'Content-Type': 'application/json'
        }
      })

      

      // const [footer,setFooter] = useState();

      // useEffect(()=>{


      //   fetch('https://sahhmallllc.myshopify.com/admin/api/2022-10/shop.json',{
      //     headers:{
      //       'X-Shopify-Access-Token' : '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',
      //       'Content-Type': 'application/json'
      //     }
      //   }).then(resp=>{
      //     console.log(resp);
      //     setFooter(footer)
      //   }).catch(err=>{
      //     console.log(err);
      //   })
      
      
      // },[])

      const footer = 2222;
      
    return(
        <div className="bg-[#fffcf9] ">





<HeroSect  collections={collections} fetchedProducts={products} />


<NewArrivals  collections={collections}  fetchedProducts={products} />


<ExploreCategs collections={collections} />

<FlashSale flashSaleProducts={CheckProducts} />


<div>
asdasdasd


<div id="c1g_testimonial"></div>

{/* data-shop="sahhmallllc.myshopify.com" */}

</div>


<Footer footerData={footer} pages={pages} />


        </div>
    )


}

const getCollectionsQuery = gql`

query GetCollections{

  collections(first:10){
  nodes{
    title
    handle
    image{
      url
    }
    products(first:50){
      nodes{
        title
      }
    }
  }
}
}
`




const GetAllProductsForNewArrivals = gql`

query GetAllProducts{
    products(first:10){
      nodes{
        title,
        handle,
        featuredImage{
          url
        }
      }
    }
  }

`;


const GetAllVariantsForFlashSale = gql`

query GetAllVariantsForFlashSale{
  
  products(first:50){
    
    nodes{
      title
      handle
variants(first:50){
  nodes{
    title
    image{
      url
    }
    compareAtPrice{
      amount
    }
    price{
      amount
    }
  }
}
    }
    
  }


}


`

const getPagesQuery = gql`

  query GetPages{
    pages(first:10){
      nodes{
        title
        handle
      }
    }
  }


`