import Head from 'next/head';
import Layout from '../../components/navigation/Layout';
import Jumbotron from '../../components/pages/products/Jumbotron';
import ProductsList from '../../components/pages/products/Products';
import Whatsapp from '../../components/navigation/Whatsapp';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Products() {
  const router = useRouter();
  const [type, setType] = useState('Our Products');

  function getTypeByQuery(query) {
    switch (query) {
      case 'electrical-utility-pole':
        return 'Electrical & Utility Pole';
      case 'light-pole':
        return 'Light Pole';
      case 'monopole-tower':
        return 'Monopole Tower';
      case 'custom-mount-antena':
        return 'Custom Mount Antena';
      default:
        return 'Our Products';
    }
  }

  useEffect(() => {
    setType(getTypeByQuery(router?.query?.type));
  }, [router?.query?.type]);

  return (
    <Layout>
      <Head>
        <title>Sanggarjaya | Products</title>
      </Head>

      <Jumbotron type={type} setType={setType} />
      <ProductsList type={type} />
      <Whatsapp />
    </Layout>
  );
}
