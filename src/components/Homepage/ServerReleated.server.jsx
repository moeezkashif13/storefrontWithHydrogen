import NewArrivals from "./NewArrivals.client";

import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import ExploreCategs from "./ExploreCategs.client";
import FlashSale from "./FlashSale.client";
import HeroSect from "./HeroSect.client";
import Footer from "../Footer.client";

import { fetchSync } from "@shopify/hydrogen";
import Testimonials from "./Testimonials.client";
import axios from "axios";
import DeserveTheBest from "./DeserveTheBest.client";
import SalesCountdown from "./Countdown.client";



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



      


const TestimonialsRelated =       fetchSync('https://api.jsonbin.io/v3/b/637dfea50e6a79321e52a3ac',{
  headers:{
    'X-Master-Key':'$2b$10$fvXzLL8IlosiUra2TtbRverbpMRSQdYMvI3yyfzaSc9635YorVeh.',
    'X-Access-Key':'$2b$10$SnIAp1yBi2CpAfJoExp7peTdo17svGa/Pc76OZsjc75gDYJKkJm3y'
  }
}).json();



      const footer = 2222;
      
    return(
        <div className="bg-[#fffcf9] ">


<HeroSect  collections={collections} fetchedProducts={products} />


<NewArrivals  collections={collections}  fetchedProducts={products} />

<Testimonials   TestimonialsRelated={TestimonialsRelated} />

<DeserveTheBest/>

<SalesCountdown/>

<FlashSale flashSaleProducts={CheckProducts} />






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
    products(first:20){
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