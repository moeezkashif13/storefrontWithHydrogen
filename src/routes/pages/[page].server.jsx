import {
    gql,
    useShopQuery,

    useRouteParams,

} from "@shopify/hydrogen";


import { Layout } from "../../components/Layout.server";

import Footer from "../../components/Footer.client";


import {Suspense} from 'react'

export default function Page(){

    const { page } = useRouteParams();

    
    const {
        data: { page:PageData,pages },
      } = useShopQuery({
        query: PAGES_QUERY,
        variables: {
            page,
        },
      });

      console.log(pages,'pages pages');

      
    return(

      <Layout>
      <Suspense>


        <div className="flex flex-col gap-y-5 py-5">

<h1 className="text-center text-4xl font-bold capitalize ">{PageData.title}</h1>

<p className="px-8" dangerouslySetInnerHTML={{__html:PageData.body}}></p>

        </div>




</Suspense>
</Layout>


    )

}

const PAGES_QUERY = gql`

query GetPageData($page: String!){

  pages(first:10){
    nodes{
      handle
      title
    }
  }

    page(handle: $page){

        title
          
          body

        }
    
}

`;
