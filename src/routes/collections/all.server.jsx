import { Layout } from "../../components/Layout.server";
import {Suspense} from 'react'

import {CacheLong, gql, Link, useShopQuery} from '@shopify/hydrogen'
import Notification from "../../components/Notification.client";
import { clippingCommonStyles } from "../../utils";

export default function AllCollections (){


  const {
    data : {products},
  } = useShopQuery({
    query: getAllProductsQuery,
    cache: CacheLong(),
  });

console.log(products);

    return(

        <Layout>
        <Suspense>
  
  <div className="pt-6 pb-10">

    <Notification fetchedProducts={products} />


<h1 className="text-4xl font-semibold  mb-8 text-center">Products</h1>


<div className="flex flex-wrap gap-y-8 justify-evenly">


{products.nodes.map(eachProduct=>{

return <Link to={`/product/${eachProduct.handle}`}> <div className="w-[280px] flex flex-col gap-y-3">

  <div className="w-full h-[370px] bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(${eachProduct.featuredImage.url})`}}></div>

<p style={clippingCommonStyles}>{eachProduct.title}</p>

<p className="font-semibold ">${eachProduct.priceRange.minVariantPrice.amount}</p>



</div>
</Link>

})}



</div>



  </div>
  
  
        </Suspense>
      </Layout>

    )

}

const getAllProductsQuery = gql`

  query getAllProductsQuery{
    
    products(first:50){
      nodes{
        title
        handle
        featuredImage{
          url
        }
        priceRange{
          minVariantPrice{
            amount
          }
        }
      }
    }

  }


`