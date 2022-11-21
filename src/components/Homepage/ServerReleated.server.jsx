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
    
      
    return(
        <div className="bg-[#fffcf9] ">





<HeroSect  collections={collections} fetchedProducts={products} />


<NewArrivals  collections={collections}  fetchedProducts={products} />


<ExploreCategs/>

<FlashSale flashSaleProducts={CheckProducts} />


<Footer pages={pages} />


        </div>
    )


}

const getCollectionsQuery = gql`

query GetCollections{

  collections(first:10){
  nodes{
    title
    handle
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