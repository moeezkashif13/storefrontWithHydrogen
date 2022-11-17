import { Suspense } from "react";


import ServerReleated from "../components/Homepage/serverReleated.server";
import { Layout } from "../components/Layout.server";

export default function Home() {

  

  return (
    <Layout>
      <Suspense>

<ServerReleated/>



      </Suspense>
    </Layout>
  );
}
