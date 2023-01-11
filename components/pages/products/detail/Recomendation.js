import { Flex, Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Card from '../ProductCard/ProductCard';
import { IoChevronBack } from 'react-icons/io5';
import { PRODUCT_LIST } from '../../../../const';
import { useState, useEffect } from 'react';

export default function Recomendation({ id }) {
  const [productData, setProductData] = useState([]);
  const router = useRouter();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRecommendation(id) {
    const listNumber = [];
    while (listNumber.length < 4) {
      const randomNumber = getRandomInt(11);
      if (randomNumber != id && !listNumber.includes(randomNumber)) listNumber.push(randomNumber);
    }
    return listNumber;
  }

  function getProductData(id) {
    const IDs = generateRecommendation(id);
    const products = [];
    IDs.map((i) => {
      products.push(PRODUCT_LIST[i]);
    });
    setProductData(products);
  }

  useEffect(() => {
    getProductData(id);
  }, [id]);

  return (
    <Flex w='100%' flexDir='column' py='3rem' px={{ base: '1rem', md: '3rem' }}>
      <Flex w='100%' gridGap='1rem' alignItems='center' justifyContent='flex-start' mb='4rem'>
        <Box
          p='0.100rem'
          bg='primary.orange'
          borderRadius='30px'
          onClick={() => router.push('/products')}
          cursor='pointer'>
          <IoChevronBack size='2em' color='white' />
        </Box>
        <Text fontWeight={400} onClick={() => router.push('/products')} cursor='pointer'>
          Back to Catalog
        </Text>
      </Flex>
      <Flex w='100%' gridGap='4rem' display={{ base: 'none', md: 'flex' }}>
        {productData.map((x, i) => (
          <Card key={x.name} img={`url(${x.img})`} text={x.name} id={x.id} />
        ))}
      </Flex>
      <Flex w='100%' gridGap='1rem' display={{ base: 'flex', md: 'none' }}>
        {productData.map((x, i) => i < 3 && <Card key={x.name} img={`url(${x.img})`} text={x.name} id={x.id} />)}
      </Flex>
    </Flex>
  );
}
