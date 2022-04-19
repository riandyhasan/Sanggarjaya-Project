import { Flex, Heading, Box, Text, Grid, GridItem } from "@chakra-ui/react";

const ProductCard = ({ img, text }) => {
  return (
    <Box
      bg={img}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="flex-end"
      pl="1.5rem"
      pb="1rem"
      color="white"
      w="174px"
      h="219.2px"
      filter="drop-shadow(0px 22px 40px rgba(0, 0, 0, 0.15))"
      borderRadius="11px"
      _hover={{
        bg: `linear-gradient(0deg, #F18720 -19.6%, #F18720 -19.59%, rgba(255, 255, 255, 0) 100%), ${img}`,
        bgRepeat: "no-repeat",
        bgSize: "cover",
        bgPosition: "center",
      }}
    >
      <Heading size="md" maxW="80%">
        {text}
      </Heading>
    </Box>
  );
};

export default function OurProducts() {
  const datas = [
    {
      img: "url('/assets/images/products/electrical-pole.png')",
      text: "Electrical & Utility Pole",
    },
    {
      img: "url('/assets/images/products/light-pole.png')",
      text: "Light Pole",
    },
    {
      img: "url('/assets/images/products/monopole-tower.png')",
      text: "Monopole Tower",
    },
    {
      img: "url('/assets/images/products/custom.png')",
      text: "Custom Mount Antena",
    },
  ];
  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="center"
      gridGap="2rem"
      py="3rem"
      bg="white"
    >
      <Heading color="primary.black" borderBottom="5px solid #F18720">
        Our Products
      </Heading>
      <Text
        color="primary.black"
        fontWeight={400}
        fontSize="0.85em"
        textAlign="center"
        maxW="40%"
      >
        We have a lineup of product that are proven and are used throughout the
        nation in many capacity.{" "}
      </Text>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={10}>
        {datas.map((item, i) => (
          <GridItem key={i}>
            <ProductCard img={item.img} text={item.text} />
          </GridItem>
        ))}
      </Grid>
      <Box
        py="0.3rem"
        bg="primary.orange"
        borderRadius="20px"
        boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
        w="15%"
        textAlign="center"
        fontSize="0.85em"
        fontWeight={600}
        cursor="pointer"
        color="white"
        _hover={{ bg: "#D26801" }}
      >
        See all our products
      </Box>
    </Flex>
  );
}
