import {
  gql,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";

import { Suspense } from "react";
  
  import { Layout } from "../../components/Layout.server";
import Notification from "../../components/Notification.client";

  
import ProductPage from "../../components/ProductPage/ProductPage.client";
  
  export default function Product({ params }) {
    const { handle } = useRouteParams();
  
    const {
      data: { product },
    } = useShopQuery({
      query: PRODUCT_QUERY,
      variables: {
        handle,
      },
    });
  
    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.product,
        resourceId: product.id,
      },
    });
  
    return (
      <Layout>
        <Suspense>
          <Seo type="product" data={product} />
        </Suspense>
        

<ProductPage productData={product} />


      </Layout>
    );
  }
  
  const PRODUCT_QUERY = gql`
    fragment MediaFields on Media {
      mediaContentType
      alt
      previewImage {
        url
      }
      ... on MediaImage {
        id
        image {
          url
          width
          height
        }
      }
      ... on Video {
        id
        sources {
          mimeType
          url
        }
      }
      ... on Model3d {
        id
        sources {
          mimeType
          url
        }
      }
      ... on ExternalVideo {
        id
        embedUrl
        host
      }
    }
    query Product($handle: String!) {
      product(handle: $handle) {
        id
        title
        vendor
        descriptionHtml
        options{
          values
      name
        }
        media(first: 7) {
          nodes {
            ...MediaFields
          }
        }
        variants(first: 100) {
          nodes {
            id
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            priceV2 {
              amount
              currencyCode
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
          }
        }
        seo {
          description
          title
        }
      }
    }
  `;
  