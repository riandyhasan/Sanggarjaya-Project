import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

export default function Jumbotron() {
  return (
    <Flex
      bg="url(/assets/images/background/about-us.png)"
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
        <Heading size="4xl">About Us</Heading>
        <Text maxW="70%">
          PT. Sanggar Jaya Abadi (SJA) was established in 2011, located in the
          Dwipuri Indsutrial complex, outside of Sumedang, West Java, Indonesia.
          Our company produce various steel based poles such as Utility Poles,
          Light poles and Monopole Tower.
          <br />
          <br />
          Currently we have the capacity to produce up to 2000 pieces daily and
          we are striving to fulfill our customers needs. We are deeply
          committed to participate as a key player to further enhance the
          development of Indonesia’s Telecommunication Infrastructure.
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
          <Flex cursor="pointer" justifyContent="center">
            <HiDownload size="1.5em" />
            <Text fontWeight={400}>Download Company Profile</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
