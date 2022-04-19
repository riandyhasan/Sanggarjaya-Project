import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

export default function Jumbotron() {
  return (
    <Flex w="100%" gridGap="2rem" justifyContent="center" py="3rem" px="3rem">
      <Flex flexDir="column" gridGap="2rem" w="65%">
        <Box
          h="5px"
          w="10%"
          bg="primary.orange"
          borderRadius="5px"
          mb="-1rem"
        />
        <Heading size="2xl" maxW="65%" lineHeight="72px" color="primary.green">
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
          w="45%"
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
      <Flex width="627px" h="491px">
        <Image src="/assets/images/products/detail-dummy.png" />
      </Flex>
    </Flex>
  );
}
