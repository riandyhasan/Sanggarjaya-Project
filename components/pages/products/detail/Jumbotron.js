import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

export default function Jumbotron() {
  return (
    <Flex w="100%" gridGap="2rem" justifyContent="center" py="3rem" px="3rem" flexDir={{ base:"column-reverse", md:"row" }} alignItems={{ base:"center", md:"flex-start" }}>
      <Flex flexDir="column" gridGap="2rem" w={{ base:"100%", md:"65%" }}>
        <Box
          h="5px"
          w="10%"
          bg="primary.orange"
          borderRadius="5px"
          mb="-1rem"
          display={{ base:"none", md:"block" }}
        />
        <Heading size="2xl" maxW="65%" lineHeight="72px" color="primary.green" display={{ base:"none", md:"block" }}>
          Single Segment Utility Pole
        </Heading>
        <Text fontSize="0.8em">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta pretium
          hac et malesuada sed sapien feugiat tortor. At vitae nunc malesuada
          quis. Ut magna convallis facilisis nulla. Faucibus nisl adipiscing
          justo est.
          <br />
          <br />
          Cursus ut facilisis id massa ullamcorper. Pellentesque libero eu augue
          aliquet sed eu tellus. Ultricies bibendum aliquam pulvinar commodo.
          Venenatis, pellentesque aliquet mi nam sit.
          <br />
          <br />
          Sed nunc scelerisque scelerisque in amet, sagittis, cursus vel
          feugiat.
        </Text>
        <Box
          py="0.6rem"
          bg="primary.orange"
          borderRadius="20px"
          boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
          w={{ base:"100%", md:"45%" }}
          textAlign="center"
          fontWeight={600}
          cursor="pointer"
          _hover={{ bg: "#D26801" }}
        >
          <Flex cursor="pointer" justifyContent="center" color="white">
            <HiDownload size="1.5em" />
            <Text fontWeight={400}>Download Product Catalog</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex width={{ base: "282.15px", md:"627px" }} h={{ base:"220.95px", md:"491px" }}>
        <Image src="/assets/images/products/detail-dummy.png" />
      </Flex>
      <Flex w="100%" flexDir="column" display={{ base:"flex", md:"none" }}>
      <Box
          h="3px"
          w="20%"
          bg="primary.orange"
          borderRadius="5px"
        />
      <Heading size="2xl" maxW="85%" lineHeight="59px" color="primary.green">
          Single Segment Utility Pole
        </Heading>
      </Flex>
    </Flex>
  );
}
