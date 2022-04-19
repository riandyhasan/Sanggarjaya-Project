import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Jumbotron from "../../components/pages/products/Jumbotron";
import ProductsList from "../../components/pages/products/Products";
import Whatsapp from "../../components/navigation/Whatsapp";

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | Products</title>
      </Head>

      <Jumbotron />
      <ProductsList />
      <Whatsapp />
    </Layout>
  );
}
