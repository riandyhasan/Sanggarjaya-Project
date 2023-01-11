import { Flex, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';

const ProductCard = ({ img, text, href }) => {
  return (
    <Link href={`/products?type=${href}`}>
      <Box
        bg={img}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        display='flex'
        alignItems='flex-end'
        pl='1.5rem'
        pb='1rem'
        color='white'
        w='174px'
        h='219.2px'
        cursor={'pointer'}
        filter='drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))'
        borderRadius='11px'
        _hover={{
          bg: `linear-gradient(0deg, #F18720 -19.6%, #F18720 -19.59%, rgba(255, 255, 255, 0) 100%), ${img}`,
          bgRepeat: 'no-repeat',
          bgSize: 'cover',
          bgPosition: 'center',
        }}>
        <Heading size='md' maxW='80%'>
          {text}
        </Heading>
      </Box>
    </Link>
  );
};

export default function OurProducts() {
  const datas = [
    {
      img: "url('/assets/images/products/electrical-pole.png')",
      text: 'Electrical & Utility Pole',
      href: 'electrical-utility-pole',
    },
    {
      img: "url('/assets/images/products/light-pole.png')",
      text: 'Light Pole',
      href: 'light-pole',
    },
    {
      img: "url('/assets/images/products/monopole-tower.png')",
      text: 'Monopole Tower',
      href: 'monopole-tower',
    },
    {
      img: "url('/assets/images/products/custom.png')",
      text: 'Custom Mount Antena',
      href: 'custom-mount-antena',
    },
  ];
  return (
    <Flex w='100%' flexDir='column' alignItems='center' gridGap='2rem' py='3rem' bg='white'>
      <Heading color='primary.black' borderBottom='5px solid #F18720'>
        Our Products
      </Heading>
      <Text
        color='primary.black'
        fontWeight={400}
        fontSize={{ base: '1em', md: '0.85em' }}
        textAlign='center'
        maxW={{ base: '90%', md: '40%' }}>
        We have a lineup of product that are proven and are used throughout the nation in many capacity.{' '}
      </Text>
      <Grid
        gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gridGap={{ base: 6, md: 10 }}
        mt={{ base: '1rem', md: '0' }}>
        {datas.map((item, i) => (
          <GridItem key={i}>
            <ProductCard img={item.img} text={item.text} href={item.href} />
          </GridItem>
        ))}
      </Grid>
      <Link href='/products'>
        <Box
          py={{ base: '0.6rem', md: '0.3rem' }}
          bg='primary.orange'
          borderRadius='20px'
          boxShadow='0px 22px 40px rgba(0, 0, 0, 0.15)'
          w={{ base: '65%', md: '15%' }}
          textAlign='center'
          fontSize={{ base: '1.2em', md: '0.85em' }}
          fontWeight={600}
          cursor='pointer'
          color='white'
          _hover={{ bg: '#D26801' }}
          mt={{ base: '2rem', md: '0' }}>
          See all our products
        </Box>
      </Link>
    </Flex>
  );
}
