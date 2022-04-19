import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

export default function VisionMision() {
  return (
    <Flex w="100%" gridGap="4rem" justifyContent="center" py="3rem" px="3rem">
      <Flex flexDir="column" w="45%" gridGap="3rem">
        <Box>
          <Box bg="primary.orange" w="20%" h="4px" borderRadius="5px" />
          <Heading color="primary.black" size="xl" mt="1rem">
            Vision
          </Heading>
          <Text fontWeight={400} fontSize="0.75em" maxW="80%" mt="2rem">
            To establish PT. Sanggar Jaya Abadi as the biggest, the best and the
            most trustworthy company in Indonesia.
          </Text>
        </Box>

        <Box>
          <Box bg="primary.orange" w="20%" h="4px" borderRadius="5px" />
          <Heading color="primary.black" size="xl" mt="1rem">
            Mission
          </Heading>
          <Text fontWeight={400} fontSize="0.75em" maxW="80%" mt="2rem">
            <OrderedList>
              <ListItem>
                Creating a quality product with a high level of gurantee.
              </ListItem>
              <ListItem>
                To keep up with increasing demand by increasing production
                capacity.
              </ListItem>
              <ListItem>Giving the best service to every customer</ListItem>
            </OrderedList>
          </Text>
        </Box>
      </Flex>
      <Flex width="35%">
        <Image src="/assets/images/background/vision-mision.png" />
      </Flex>
    </Flex>
  );
}
