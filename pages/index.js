import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Jumbotron from "../components/pages/home/Jumbotron";
import OurProducts from "../components/pages/home/OurProducts";
import OurExperience from "../components/pages/home/OurExperience";
import OurCustomers from "../components/pages/home/OurCustomers";
import Whatsapp from "../components/navigation/Whatsapp";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sanggarjaya</title>
      </Head>

      <Jumbotron />
      <OurProducts />
      <OurExperience />
      <OurCustomers />
      <Whatsapp />
    </Layout>
  );
}
