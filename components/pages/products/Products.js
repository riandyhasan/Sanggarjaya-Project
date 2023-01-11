import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Card from './ProductCard/ProductCard';
import { PRODUCT_LIST } from '../../../const';

export default function Products({ type }) {
  return (
    <Flex w='100%' justifyContent='center' px='2rem' py='2rem'>
      <Grid
        gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gridGap={{ base: '1.5rem', md: '6rem' }}>
        {PRODUCT_LIST.map((x, i) => {
          if (type == 'All Products' || type == 'Our Products')
            return (
              <GridItem key={i}>
                <Card img={`url(${x.img})`} text={x.name} id={x.id} />
              </GridItem>
            );
          else {
            if (type == x.type)
              return (
                <GridItem key={i}>
                  <Card img={`url(${x.img})`} text={x.name} id={x.id} />
                </GridItem>
              );
          }
        })}
      </Grid>
    </Flex>
  );
}
