import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
  Head
} from "@shopify/hydrogen";



import { Suspense } from "react";



function App({ routes }) {
  return (
<>    


<Head>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap" rel="stylesheet" />

</Head>


    <Suspense fallback={null}>
      <ShopifyProvider>
          <CartProvider>
            <Router>
              <FileRoutes routes={routes} />
            </Router>
          </CartProvider>
      </ShopifyProvider>
    </Suspense>

</>


  );
}

export default renderHydrogen(App);
