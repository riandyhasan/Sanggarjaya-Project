import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function OurExperience() {
  return (
    <Flex w="100%" gridGap="4rem" py="3rem" pl="3rem" bg="#FBFBFB">
      <Flex flexDir="column" w="45%">
        <Heading
          color="primary.black"
          size="xl"
          borderTop="4px solid #077F46"
          maxW="13.5%"
          lineHeight="59px"
        >
          Our
        </Heading>
        <Heading color="primary.black" size="xl" maxW="65%" lineHeight="59px">
          Experience
        </Heading>
        <Heading
          size="lg"
          color="primary.orange"
          lineHeight="59px"
          maxW="85%"
          mt="2rem"
        >
          11 Years In The Telecommunication Business
        </Heading>
        <Text fontWeight={400} fontSize="0.75em" maxW="80%" mt="2rem">
          Since 2011, we have built a strong reputation as a manufacturer and
          our products are widely used around the nation by respectable player
          of the Industry such as PT. Telkom Indonesia, PT. XL Axiata, PT PLN
          and many more. We are striving to always continue to deliver and
          improve the quality of our products.
        </Text>
      </Flex>
      <Flex width="55%">
        <Image src="/assets/images/background/our-experience.png" />
      </Flex>
    </Flex>
  );
}
