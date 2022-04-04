import { Flex, Heading, Text, Box } from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <Flex
      bg="url('/assets/images/background/home.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      minH="100vh"
      alignItems="center"
      px="4rem"
      pt="3rem"
      color="white"
    >
      <Flex flexDir="column" gridGap="2rem" maxW="65%">
        <Heading size="4xl">Pioneer Of Iron Pole In Indonesia</Heading>
        <Heading size="lg" color="primary.orange">
          PT. Sanggar Jaya Abadi
        </Heading>
        <Text maxW="70%">
          PT. Sanggar Jaya Abadi is established with a mission to create the
          best products for the people and society. Even though we are young, we
          certainly are experienced and through the course of our establishment
          we have worked with some of the most known and trusted companies that
          are scattered through out the nation. The trust that our partners have
          put into us, have made us work even harder to give the best
          satisfaction for our customers.{" "}
        </Text>
        <Box
          py="0.6rem"
          bg="primary.orange"
          borderRadius="20px"
          boxShadow="0px 22px 40px rgba(0, 0, 0, 0.15)"
          w="35%"
          textAlign="center"
          fontWeight={600}
          cursor="pointer"
          _hover={{ bg: "#D26801" }}
        >
          Learn about our company
        </Box>
      </Flex>
    </Flex>
  );
}
