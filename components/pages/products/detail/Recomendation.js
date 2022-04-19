import { Flex, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Card from "../ProductCard/ProductCard";
import { IoChevronBack } from "react-icons/io5";

export default function Recomendation() {
  const router = useRouter();
  return (
    <Flex w="100%" flexDir="column" py="3rem" px="3rem">
      <Flex
        w="100%"
        gridGap="1rem"
        alignItems="center"
        justifyContent="flex-start"
        mb="4rem"
      >
        <Box
          p="0.100rem"
          bg="primary.orange"
          borderRadius="30px"
          onClick={() => router.push("/products")}
          cursor="pointer"
        >
          <IoChevronBack size="2em" color="white" />
        </Box>
        <Text
          fontWeight={400}
          onClick={() => router.push("/details")}
          cursor="pointer"
        >
          Back to Catalog
        </Text>
      </Flex>
      <Flex w="100%" gridGap="4rem">
        {[...Array(4)].map((x, i) => (
          <Card
            img="url(/assets/images/products/dummy.png)"
            text="Single Segment Utility Pole"
          />
        ))}
      </Flex>
    </Flex>
  );
}
