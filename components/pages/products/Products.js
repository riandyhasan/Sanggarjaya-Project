import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Card from "./ProductCard/ProductCard";

export default function Products() {
  return (
    <Flex w="100%" justifyContent="center" px="2rem" py="2rem">
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="6rem">
        {[...Array(10)].map((x, i) => (
          <GridItem>
            <Card
              img="url(/assets/images/products/dummy.png)"
              text="Single Segment Utility Pole"
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
