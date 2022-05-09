import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <Flex
      bg="url('/assets/images/background/contact-us.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      minH="92vh"
      alignItems="flex-start"
      px={{ base:"2rem", md:"4rem" }}
      pt="3rem"
      color="white"
    >
      <Flex flexDir="column" gridGap="2rem" alignItems="center" color="white">
        <Heading borderBottom="5px solid #077F46">Contact Us</Heading>
        <Text fontWeight={400} fontSize={{ base:"1em", md:"0.85em" }} textAlign="center" maxW={{ base:"100%", md: "55%" }}>
          PT. Sanggar Jaya Abadi (SJA) providing any information needed through
          various communication channels. For any questions relating to PT.
          Sanggar Jaya Abadi (SJA), please contact us.{" "}
        </Text>
      </Flex>
    </Flex>
  );
}
