import { Flex, Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

export default function Jumbotron() {
  const [type, setType] = useState("Our Products");
  return (
    <Flex
      bg="url(/assets/images/background/product.png)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="60vh"
      alignItems="center"
      px="4rem"
      py="1.5rem"
      color="white"
    >
      <Flex
        flexDir="column"
        gridGap="2rem"
        alignItems="center"
        w="100%"
        px="3rem"
      >
        <Heading size="4xl" borderBottom="5px solid #F18720">
          {type}
        </Heading>
        <Grid gridTemplateColumns="repeat(3, 1fr)" gap={10}>
          <GridItem>
            <Box
              fontSize="1em"
              py="0.6rem"
              px="1.2rem"
              bg={type == "Our Products" ? "primary.orange" : "primary.grey"}
              onClick={() => setType("Our Products")}
              borderRadius="20px"
              boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
              textAlign="center"
              fontWeight={400}
              cursor="pointer"
              _hover={{ bg: "#D26801" }}
            >
              All Products
            </Box>
          </GridItem>
          <GridItem>
            <Box
              fontSize="1em"
              py="0.6rem"
              px="1.2rem"
              bg={
                type == "Electrical & Utility Pole"
                  ? "primary.orange"
                  : "primary.grey"
              }
              onClick={() => setType("Electrical & Utility Pole")}
              borderRadius="20px"
              boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
              textAlign="center"
              fontWeight={400}
              cursor="pointer"
              _hover={{ bg: "#D26801" }}
            >
              Electrical & Utility Pole
            </Box>
          </GridItem>
          <GridItem>
            <Box
              fontSize="1em"
              py="0.6rem"
              px="1.2rem"
              bg={type == "Light Pole" ? "primary.orange" : "primary.grey"}
              onClick={() => setType("Light Pole")}
              borderRadius="20px"
              boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
              textAlign="center"
              fontWeight={400}
              cursor="pointer"
              _hover={{ bg: "#D26801" }}
            >
              Light Pole
            </Box>
          </GridItem>
        </Grid>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem>
            <Box
              fontSize="1em"
              py="0.6rem"
              px="1.2rem"
              bg={type == "Monopole Tower" ? "primary.orange" : "primary.grey"}
              onClick={() => setType("Monopole Tower")}
              borderRadius="20px"
              boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
              textAlign="center"
              fontWeight={400}
              cursor="pointer"
              _hover={{ bg: "#D26801" }}
            >
              Monopole Tower
            </Box>
          </GridItem>
          <GridItem>
            <Box
              fontSize="1em"
              py="0.6rem"
              px="1.2rem"
              bg={
                type == "Custom Mount Antena"
                  ? "primary.orange"
                  : "primary.grey"
              }
              onClick={() => setType("Custom Mount Antena")}
              borderRadius="20px"
              boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
              textAlign="center"
              fontWeight={400}
              cursor="pointer"
              _hover={{ bg: "#D26801" }}
            >
              Custom Mount Antena
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
