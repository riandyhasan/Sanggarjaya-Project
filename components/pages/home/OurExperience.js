import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";

export default function OurExperience() {
  return (
    <Flex w="100%" gridGap="4rem" py="3rem" pl={{ base: "0", md: "3rem" }} bg="#FBFBFB" flexDir={{ base:"column-reverse", md:"row" }} alignItems={{ base:"center", md:"flex-start" }}>
      <Flex flexDir="column" w={{ base:"90%", md:"45%" }}>
        <Box bg="primary.green" h="4px" w={{ base:"19.5%", md:"12.5%" }}/>
        <Heading
          color="primary.black"
          fontSize={{ base:"2.5em", md: "2em" }}
          maxW={{ base: "90%", md: "40%" }}
          lineHeight="59px"
        >
          Our Experience
        </Heading>
        <Heading
          size="lg"
          color="primary.orange"
          lineHeight={{ base: "40px", md: "59px" }}
          maxW={{ base: "95%", md: "85%" }}
          mt="2rem"
        >
          11 Years In The Telecommunication Business
        </Heading>
        <Text fontWeight={400} fontSize={{ base: "1em", md:"0.75em" }} maxW={{ base: "95%", md: "80%" }} mt="2rem">
          Since 2011, we have built a strong reputation as a manufacturer and
          our products are widely used around the nation by respectable player
          of the Industry such as PT. Telkom Indonesia, PT. XL Axiata, PT PLN
          and many more. We are striving to always continue to deliver and
          improve the quality of our products.
        </Text>
      </Flex>
      <Flex width={{ base: "85%", md:"55%" }}>
        <Image src="/assets/images/background/our-experience.png" />
      </Flex>
    </Flex>
  );
}
