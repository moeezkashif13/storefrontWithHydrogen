import {
    gql,
    useShopQuery,

    useRouteParams,

} from "@shopify/hydrogen";

export default function Page(){

    const { page } = useRouteParams();

    console.log(page,'handle handle handle');

    const {
        data: { page:PageData },
      } = useShopQuery({
        query: PAGES_QUERY,
        variables: {
            page,
        },
      });

      console.log(PageData);

      
    return(
        <div className="flex flex-col gap-y-6 py-4">

<h1 className="text-center text-4xl font-bold capitalize ">{PageData.title}</h1>

<p className="px-4" dangerouslySetInnerHTML={{__html:PageData.body}}></p>


        </div>
    )

}

const PAGES_QUERY = gql`

query GetPageData($page: String!){

    page(handle: $page){

        title
          
          body

        }
    
}

`;
