import { Flex, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

export default function OurCustomers() {
  const customers = [
    {
      name: "MNC Play",
      img: "/assets/images/customers/mncplay.png",
    },
    {
      name: "Telkom Indonesia",
      img: "/assets/images/customers/telkom.png",
    },
    {
      name: "Smartfren",
      img: "/assets/images/customers/smartfren.png",
    },
    {
      name: "Fiberstar",
      img: "/assets/images/customers/fiberstar.png",
    },
    {
      name: "Telkomsel",
      img: "/assets/images/customers/telkomsel.png",
    },
    {
      name: "Biznet",
      img: "/assets/images/customers/biznet.png",
    },
    {
      name: "INTI",
      img: "/assets/images/customers/ptinti.png",
    },
    {
      name: "First Media",
      img: "/assets/images/customers/firstmedia.png",
    },
    {
      name: "PLN",
      img: "/assets/images/customers/pln.png",
    },
    {
      name: "XL",
      img: "/assets/images/customers/xl.png",
    },
    {
      name: "PU",
      img: "/assets/images/customers/pu.png",
    },
    {
      name: "My Republic",
      img: "/assets/images/customers/myrepublic.png",
    },
  ];
  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="center"
      py="3rem"
      bg="white"
      px="2rem"
      gridGap="2rem"
    >
      <Heading color="primary.black" borderBottom="5px solid #077F46">
        Our Customers
      </Heading>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={6}>
        {customers.map((item, i) => (
          <GridItem key={i}>
            <Image src={item.img} alt={item.name} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
