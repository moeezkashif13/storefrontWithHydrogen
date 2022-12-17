import { Suspense } from "react";
import { useShopQuery, CacheLong, gql, Seo, fetchSync } from "@shopify/hydrogen";

import Header from "./Header.client";
import Footer from "./Footer.client";


/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  const {
    data : {pages},
  } = useShopQuery({
    query: getPagesQuery,
    cache: CacheLong(),
  });

  const FooterRelated = fetchSync('https://sahhmallllc.myshopify.com/admin/api/2022-10/shop.json',{
  headers:{
    'X-Shopify-Access-Token' : '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',

  }
}).json()





  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header pages={pages} shop={shop} />

        <main role="main" id="mainContent" className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>


<Footer footerRelated={FooterRelated} pages={pages} />



      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query layout {
    shop {
      name
      description
    }
  }
`;

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