import NewArrivals from "./NewArrivals.client";

import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import ExploreCategs from "./ExploreCategs.client";
import FlashSale from "./FlashSale.client";
import HeroSect from "./HeroSect.client";
import Footer from "./Footer.client";


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
    
      
    return(
        <div className="bg-[#fffcf9]">

<HeroSect fetchedProducts={products} />


<NewArrivals fetchedProducts={products} />


<ExploreCategs/>

<FlashSale flashSaleProducts={CheckProducts} />


{/* <Footer/> */}


        </div>
    )


}

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