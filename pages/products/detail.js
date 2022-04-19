import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Jumbotron from "../../components/pages/products/detail/Jumbotron";
import Specification from "../../components/pages/products/detail/Spesification";
import Recomendation from "../../components/pages/products/detail/Recomendation";
import Whatsapp from "../../components/navigation/Whatsapp";

export default function Detail() {
  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | Products</title>
      </Head>

      <Jumbotron />
      <Specification />
      <Recomendation />
      <Whatsapp />
    </Layout>
  );
}
