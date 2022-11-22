import NewArrivals from "./NewArrivals.client";

import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import ExploreCategs from "./ExploreCategs.client";
import FlashSale from "./FlashSale.client";
import HeroSect from "./HeroSect.client";
import Footer from "../Footer.client";
import { useState } from "react";
import { fetchSync } from "@shopify/hydrogen";
import Testimonials from "./Testimonials.client";

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

// const TestimonialsRelated =       fetchSync('http://localhost:1337/api/testimonials?populate[0]=EachTestimonial&populate[1]=EachTestimonial.UserImage',).json();



      const footer = 2222;
      
    return(
        <div className="bg-[#fffcf9] ">





<HeroSect  collections={collections} fetchedProducts={products} />


<NewArrivals  collections={collections}  fetchedProducts={products} />


{/* <ExploreCategs collections={collections} /> */}

<FlashSale flashSaleProducts={CheckProducts} />


{/* <Testimonials  TestimonialsRelated={TestimonialsRelated} /> */}


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