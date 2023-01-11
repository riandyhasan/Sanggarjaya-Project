import Head from 'next/head';
import Layout from '../../../components/navigation/Layout';
// import Jumbotron from '../../../components/pages/products/detail/Jumbotron';
import Specification from '../../../components/pages/products/detail/Spesification';
import Recomendation from '../../../components/pages/products/detail/Recomendation';
import Whatsapp from '../../../components/navigation/Whatsapp';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Detail() {
  const router = useRouter();
  const [productID, setProductID] = useState(null);

  useEffect(() => {
    setProductID(router?.query?.id);
  }, [router?.query?.id]);

  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | Products</title>
      </Head>

      {/* <Jumbotron /> */}
      <Specification id={productID} />
      <Recomendation id={productID} />
      <Whatsapp />
    </Layout>
  );
}
